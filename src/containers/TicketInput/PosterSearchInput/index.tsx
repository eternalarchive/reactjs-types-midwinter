import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import BackArrowIcon from '../../../components/Svgs/BackArrowIcon';
import { rootState } from '../../../store/rootReducer';
import { getGoogleImgRequest } from '../actions';
import PosterBox from './PosterBox';
import { S } from './styles';

interface TsearchQuery {
  searchQuery: string;
}
interface PosterSearchInputProps {
  isImgSearchOpen: boolean;
  setImgSearchOpen: Dispatch<SetStateAction<boolean>>;
  handleImageClick: (link: string) => void;
}

function PosterSearchInput({
  isImgSearchOpen,
  setImgSearchOpen,
  handleImageClick,
}: PosterSearchInputProps) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const { loading, posters } = useSelector(
    (state: rootState) => state.ticketInput.formState,
  );

  const onSubmit = async ({ searchQuery }: TsearchQuery) => {
    dispatch(getGoogleImgRequest(searchQuery));
    reset();
  };

  return (
    <>
      <div
        css={S.overlay(isImgSearchOpen)}
        onClick={() => setImgSearchOpen(false)}
      />
      <div css={S.imgSearchPopup(isImgSearchOpen)}>
        <section css={S.section} role="dialog">
          <h2 css={S.title}>이미지 검색하기</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              css={S.textInput}
              placeholder="검색어를 입력해주세요."
              {...register('searchQuery', { required: true })}
            />
          </form>
          <PosterBox
            loading={loading}
            posters={posters}
            setImgSearchOpen={setImgSearchOpen}
            handleImageClick={handleImageClick}
          />
          <button css={S.closeButton} onClick={() => setImgSearchOpen(false)}>
            <BackArrowIcon />
          </button>
        </section>
      </div>
    </>
  );
}

export default PosterSearchInput;
