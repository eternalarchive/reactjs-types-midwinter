import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { rootState } from '../../store/rootReducer';
import { CloseIcon } from '../../components/Svgs';
import BlueButton from '../../components/Buttons/BlueButton';
import { patchTicketDataRequest } from '../Tickets/actions';
import { TticketData } from '../Calendar/saga';
import {
  deleteTicketRequest,
  hideTicketInputForm,
  postAddTicketRequest,
} from './actions';
import { CATEGORIES, CATEGORY } from './constants';
import PosterSearchInput from './PosterSearchInput';
import { S } from './styles';

const useStyles = makeStyles(theme => ({
  container: {
    borderBottom: '2px solid #d0d0d0',
    '&:hover': {
      borderBottomColor: '#131313',
    },
  },
  textField: {
    fontSize: '22px',
    margin: '10px 0',
    color: '#131313',
  },
}));

export interface TinputTicketData {
  poster: string;
  category: 'musical' | 'theater' | 'music-theater' | 'etc' | 'default';
  title: string;
  schedule: string;
  place?: string;
  seat?: string;
  price?: string;
  casting?: string;
  discount_type?: string;
  memo?: string;
}

function TicketInput() {
  const dispatch = useDispatch();
  const ticketState = useSelector(
    (state: rootState) => state.ticketInput.ticketState,
  );
  const { isOpen } = useSelector(
    (state: rootState) => state.ticketInput.formState,
  );

  const [isImgSearchOpen, setImgSearchOpen] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const { register, handleSubmit, reset, control } = useForm();
  const classes = useStyles();

  useEffect(() => {
    const ticketInput = document.querySelector('#ticketInput');
    ticketInput?.scrollTo(0, 0);
  }, [isOpen]);

  useEffect(() => {
    reset({
      category: ticketState.category || 'default',
      title: ticketState.title || undefined,
      schedule:
        dayjs(ticketState.schedule).format('YYYY-MM-DDTHH:mm') || undefined,
      place: ticketState.place || undefined,
      seat: ticketState.seat || undefined,
      price: ticketState.price || undefined,
      casting: ticketState.casting ? ticketState.casting.join(', ') : undefined,
      discount_type: ticketState.discount_type || undefined,
      memo: ticketState.memo || undefined,
    });
  }, [reset, ticketState]);

  const handleImageClick = (link: string) => {
    setImgUrl(link);
  };

  const onSubmit = (data: TinputTicketData) => {
    if (!imgUrl && !ticketState.poster) return alert('사진을 추가해주세요.');
    const { title, price, casting } = data;
    const submitDatas: TticketData = {
      ...data,
      title: title.trim(),
      price: price ? +price : undefined,
      casting: casting
        ? casting.split(',').map(person => person.trim())
        : undefined,
    };

    if (imgUrl || ticketState.poster) {
      submitDatas.poster = imgUrl || ticketState.poster;
    }

    if (price) {
      submitDatas.price = +price;
    }

    if (ticketState.isModify) {
      submitDatas._id = ticketState._id;
      dispatch(patchTicketDataRequest(submitDatas));
    } else {
      dispatch(postAddTicketRequest(submitDatas));
    }
    closeForm();
  };

  const closeForm = () => {
    dispatch(hideTicketInputForm());
    setImgUrl(null);
    setImgSearchOpen(false);
    reset();
  };

  const deleteTicket = () => {
    const isDeleteConfirm = window.confirm('티켓을 삭제하시겠어요?');
    if (!isDeleteConfirm) return;
    dispatch(deleteTicketRequest(ticketState._id));
    closeForm();
  };

  return (
    <>
      <PosterSearchInput
        isImgSearchOpen={isImgSearchOpen}
        setImgSearchOpen={setImgSearchOpen}
        handleImageClick={handleImageClick}
      />
      <section css={S.section(isOpen)} id="ticketInput">
        <h2 css={S.h2}>TICKET</h2>
        <div css={S.photoArea}>
          {imgUrl || (ticketState.isModify && ticketState.poster) ? (
            <img
              src={imgUrl || ticketState.poster}
              alt="poster"
              css={S.poster}
              onClick={() => setImgSearchOpen(true)}
            />
          ) : (
            <BlueButton handleClick={() => setImgSearchOpen(true)}>
              사진 가져오기
            </BlueButton>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select css={S.textInput} {...register('category')}>
            <option value="default" disabled hidden>
              관람하는 극의 장르는 무엇인가요?
            </option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {CATEGORY[category]}
              </option>
            ))}
          </select>
          <input
            placeholder="제목을 입력해주세요."
            css={S.textInput}
            {...register('title', { required: true })}
          />
          <Controller
            name="schedule"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                id="datetime-local"
                type="datetime-local"
                css={S.textInput}
                InputProps={{
                  classes: {
                    input: classes.textField,
                  },
                  disableUnderline: true,
                }}
                classes={{ root: classes.container }}
                {...field}
              />
            )}
          />
          <input
            placeholder="관람 장소를 입력해주세요."
            css={S.textInput}
            {...register('place')}
          />
          <input
            placeholder="좌석을 입력해주세요."
            css={S.textInput}
            {...register('seat')}
          />
          <input
            type="number"
            placeholder="가격을 입력해주세요."
            css={S.textInput}
            {...register('price')}
          />
          <input
            placeholder="캐스팅을 ,로 구분하여 입력해주세요."
            css={S.textInput}
            {...register('casting')}
          />
          <input
            placeholder="할인권종을 입력해주세요."
            css={S.textInput}
            {...register('discount_type')}
          />
          <textarea
            placeholder="메모"
            css={S.textInput}
            {...register('memo')}
          />
          <button css={S.saveButton}>저장하기</button>
        </form>
        <button css={S.closeButton} onClick={closeForm}>
          <CloseIcon />
        </button>
      </section>
    </>
  );
}

export default TicketInput;
