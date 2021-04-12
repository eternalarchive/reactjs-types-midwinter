import { css } from '@emotion/react';
import media from '../../../libs/MediaQuery';

export const S = {
  imgSearchPopup: (isImgSearchOpen: boolean) => css`
    display: ${isImgSearchOpen ? 'block' : 'none'};
  `,
  overlay: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 150;
  `,
  section: css`
    position: fixed;
    top: calc(50% - 250px);
    width: 430px;
    height: 500px;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    z-index: 200;
    ${media.mobile`
      width: 100%;
      max-width: 430px;
      min-width: 320px;
    `}
  `,
  textInput: css`
    display: block;
    width: 100%;
    background-color: #fff;
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
      border-bottom-color: black;
    }
  `,
  ul: css`
    height: calc(100% - 90px);
    overflow: scroll;
  `,
  poster: css`
    display: inline-block;
    width: 33.3%;
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
    justify-content: center;
    align-items: center;
    height: 50%;
    font-size: 14px;
    color: #666;
  `,
};
