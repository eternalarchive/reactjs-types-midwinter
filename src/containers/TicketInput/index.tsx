import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { rootState } from '../../store/rootReducer';
import { CloseIcon } from '../../components/Svgs';
import { getAllTicketsRequest } from '../Calendar/actions';
import { hideTicketInputForm, postAddTicketRequest } from './actions';
import PosterSearchInput from './PosterSearchInput';
import { S } from './styles';

export interface TsubmitTicketDatas {
  poster?: string;
  category?: 'musical' | 'theater' | 'music-theater' | 'etc' | 'default';
  title: string;
  schedule: string;
  place?: string;
  seat?: string;
  price?: number;
  casting?: string[];
  discount_type?: string;
  memo?: string;
}

export interface TinputTicketDatas {
  poster: string;
  category?: 'musical' | 'theater' | 'music-theater' | 'etc' | 'default';
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
  const schedule = useSelector(
    (state: rootState) => state.ticketInput.formState.schedule,
  );
  const isOpen = useSelector(
    (state: rootState) => state.ticketInput.formState.isOpen,
  );

  const [isImgSearchOpen, setImgSearchOpen] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm();

  const handleImageClick = (link: string) => {
    setImgUrl(link);
  };

  const onSubmit = (data: TinputTicketDatas) => {
    const {
      category,
      title,
      schedule,
      place,
      seat,
      price,
      casting,
      discount_type,
      memo,
    } = data;
    const submitDatas: TsubmitTicketDatas = {
      title: title.trim(),
      schedule,
    };
    if (imgUrl) {
      submitDatas.poster = imgUrl;
    }
    if (category) {
      submitDatas.category = category;
    }
    if (place) {
      submitDatas.place = place.trim();
    }
    if (seat) {
      submitDatas.seat = seat.trim();
    }
    if (price) {
      submitDatas.price = +price.trim();
    }
    if (casting) {
      submitDatas.casting = casting.split(',').map(person => person.trim());
    }
    if (discount_type) {
      submitDatas.discount_type = discount_type;
    }
    if (memo) {
      submitDatas.memo = memo;
    }

    dispatch(postAddTicketRequest(submitDatas));
    closeForm();
  };

  const closeForm = () => {
    dispatch(getAllTicketsRequest());
    dispatch(hideTicketInputForm());
    setImgUrl(null);
    setImgSearchOpen(false);
    reset();
  };

  return (
    <>
      <PosterSearchInput
        isImgSearchOpen={isImgSearchOpen}
        setImgSearchOpen={setImgSearchOpen}
        handleImageClick={handleImageClick}
      />
      <section css={S.section(isOpen)}>
        <h2 css={S.h2}>TICKET</h2>
        <div css={S.photoArea}>
          {imgUrl ? (
            <img
              src={imgUrl}
              alt="poster"
              css={S.poster}
              onClick={() => setImgSearchOpen(true)}
            />
          ) : (
            <button
              css={S.addPhotoButton}
              onClick={() => setImgSearchOpen(true)}
            >
              사진 가져오기
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select css={S.textInput} {...register('category')}>
            <option value="default">카테고리를 선택해주세요.</option>
            <option value="musical">뮤지컬</option>
            <option value="theater">연극</option>
            <option value="music-theater">음악극</option>
            <option value="etc">기타</option>
          </select>
          <input
            placeholder="제목을 입력해주세요."
            css={S.textInput}
            {...register('title', { required: true })}
          />
          <input
            type="datetime-local"
            placeholder="관람일을 선택해주세요."
            defaultValue={
              schedule ? dayjs(schedule).format('YYYY-MM-DDT20:00') : undefined
            }
            css={S.textInput}
            {...register('schedule', { required: true })}
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
