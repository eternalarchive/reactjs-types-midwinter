import { css, keyframes } from '@emotion/react';
import media from '../../../libs/MediaQuery';

const popupAni = keyframes`
  from {
    margin-top: 50px;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
`;

const imgAni = keyframes`
  from {
    margin-top: 20px;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
`;

export const S = {
  imgSearchPopup: (isImgSearchOpen: boolean) => css`
    display: ${isImgSearchOpen ? 'block' : 'none'};
  `,
  overlay: (isImgSearchOpen: boolean) => css`
    position: ${isImgSearchOpen ? 'fixed' : 'none'};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(246, 246, 246, 0.5);
    z-index: 150;
  `,
  section: css`
    position: fixed;
    top: calc(50% - 270px);
    width: 430px;
    height: 550px;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fcfcfc;
    z-index: 200;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
    animation: ${popupAni} 0.2s linear;
    ${media.mobile`
      width: 100%;
      max-width: 430px;
      min-width: 320px;
    `}
  `,
  title: css`
    font-size: 24px;
  `,
  textInput: css`
    display: block;
    width: 100%;
    background-color: #fcfcfc;
    border: 0px;
    border-bottom: 2px solid #d0d0d0;
    padding: 15px 0;
    margin: 15px 0;
    font-size: 22px;
    outline: none;
    ::placeholder {
      color: #d0d0d0;
      font-size: 22px;
    }
    :focus {
      border-bottom-color: #131313;
    }
  `,
  ul: css`
    height: calc(100% - 160px);
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  poster: css`
    display: inline-flex;
    width: 32.5%;
    height: 170px;
    align-items: center;
    border: 0.5px solid #d9d9d9;
    background-color: #f7f7f7;
    overflow: hidden;
    margin-bottom: 5px;
    transition: all 0.2s;
    animation: ${imgAni} 0.3s linear;
  `,
  img: css`
    width: 100%;
    cursor: pointer;
  `,
  closeButton: css`
    position: absolute;
    background-color: transparent;
    top: 20px;
    right: 20px;
    padding: 10px;
  `,
  empty: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    color: #848484;
    margin-top: 20%;
  `,
  tip: css`
    font-weight: 700;
    font-size: 20px;
    color: #387eff;
    margin: 20px 0;
    ::before {
      content: '#';
    }
  `,
};
