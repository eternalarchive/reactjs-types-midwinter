import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { BackArrowIcon } from '../../../components/Svgs';
import { rootState } from '../../../store/rootReducer';
import { getGoogleImgRequest } from '../actions';
import { S } from './styles';

interface TsearchQuery {
  searchQuery: string;
}

export interface TdataItems {
  title: string;
  link: string;
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
  const posters = useSelector(
    (state: rootState) => state.ticketInput.formState.posters,
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
          {posters ? (
            <ul css={S.ul}>
              {posters.map(
                (item: { link: string; title: string }, index: number) => (
                  <li
                    css={S.poster}
                    onClick={() => handleImageClick(item.link)}
                    key={`${item.title + index}`}
                  >
                    <img
                      src={item.link}
                      alt={item.title}
                      css={S.img}
                      onClick={() => setImgSearchOpen(false)}
                    />
                  </li>
                ),
              )}
            </ul>
          ) : (
            <div css={S.empty}>
              <p css={S.tip}>Tip</p>
              <p>
                직사각형 형태의 이미지가
                <br />
                달력에 잘 어울려요!
              </p>
            </div>
          )}
          <button css={S.closeButton} onClick={() => setImgSearchOpen(false)}>
            <BackArrowIcon />
          </button>
        </section>
      </div>
    </>
  );
}

export default PosterSearchInput;
