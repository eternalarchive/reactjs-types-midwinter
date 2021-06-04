import React, { Dispatch, SetStateAction } from 'react';
import Loading from '../../../../components/Common/Loading';
import { Iposter } from '../../reducer';
import { S } from '../styles';

interface PosterBoxProps {
  loading: boolean;
  posters: Iposter[] | null;
  setImgSearchOpen: Dispatch<SetStateAction<boolean>>;
  handleImageClick: (link: string) => void;
}

function PosterBox({
  loading,
  posters,
  setImgSearchOpen,
  handleImageClick,
}: PosterBoxProps) {
  if (loading) return <Loading />;

  const clickImg = (link: string) => {
    handleImageClick(link);
    setImgSearchOpen(false);
  };

  return (
    <>
      {posters ? (
        <ul css={S.ul}>
          {posters.map(
            (item: { link: string; title: string }, index: number) => (
              <li
                css={S.poster}
                onClick={() => clickImg(item.link)}
                key={`${item.title + index}`}
                tabIndex={0}
              >
                <img src={item.link} alt={item.title} css={S.img} />
              </li>
            ),
          )}
        </ul>
      ) : (
        <div css={S.empty}>
          <p css={S.tip}>Tip</p>
          <p>
            세로가 긴 직사각형 형태의 이미지가
            <br />
            달력에 잘 어울려요!
          </p>
        </div>
      )}
    </>
  );
}

export default PosterBox;
