import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import TextField from '@material-ui/core/TextField';
import { rootState } from '../../store/rootReducer';
import BlueButton from '../../components/Buttons/BlueButton';
import CloseButton from '../../components/Buttons/CloseButton';
import { patchTicketDataRequest } from '../Tickets/actions';
import { IticketData } from '../Schedule/saga';
import {
  deleteTicketRequest,
  hideTicketInputForm,
  postAddTicketRequest,
} from './actions';
import { CATEGORIES, CATEGORY, TICKETINPUTS } from './constants';
import PosterSearchInput from './PosterSearchInput';
import { S, useStyles } from './styles';
import BasicInput from '../../components/Form/BasicInput';

export interface IinputTicketData {
  category: 'musical' | 'theater' | 'music-theater' | 'etc' | 'default';
  title: string;
  schedule: string;
  place?: string;
  seat?: string;
  price?: number;
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
      schedule: dayjs(ticketState.schedule).format('YYYY-MM-DDTHH:mm'),
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

  const onSubmit = (data: IinputTicketData) => {
    if (!imgUrl && !ticketState.poster) return alert('사진을 추가해주세요.');

    const { title, casting } = data;
    const submitDatas: IticketData = {
      ...data,
      title: title.trim(),
      poster: imgUrl || ticketState.poster || '', // 여기 짜증나..
      casting: casting
        ? casting.split(',').map(person => person.trim())
        : undefined,
    };

    if (ticketState.isModify) {
      submitDatas._id = ticketState._id;
      dispatch(patchTicketDataRequest(submitDatas));
    } else {
      dispatch(postAddTicketRequest(submitDatas));
    }
    closeForm();
  };

  const openImgSearch = () => {
    setImgSearchOpen(true);
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
    if (ticketState._id) {
      dispatch(deleteTicketRequest(ticketState._id));
    }
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
            <BlueButton onClick={openImgSearch}>사진 가져오기</BlueButton>
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
          <BasicInput
            placeholder="제목을 입력해주세요"
            label="title"
            required={true}
            register={register}
          />
          <Controller
            name="schedule"
            control={control}
            rules={{ required: true }}
            defaultValue={dayjs().format('YYYY-MM-DDTHH:mm')}
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
          {TICKETINPUTS.map(input => (
            <BasicInput
              key={input.key}
              type={input.type || 'text'}
              placeholder={input.placeholder}
              label={input.key}
              register={register}
            />
          ))}
          <textarea
            placeholder="메모"
            css={S.textInput}
            {...register('memo')}
          />
          <button css={S.saveButton}>저장하기</button>
        </form>
        {ticketState.isModify && (
          <button css={S.deleteButton} onClick={deleteTicket}>
            티켓 삭제
          </button>
        )}
        <CloseButton css={S.closeButton} onClick={closeForm} />
      </section>
    </>
  );
}

export default TicketInput;
