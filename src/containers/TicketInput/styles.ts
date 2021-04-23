import { css, keyframes } from '@emotion/react';
import media from '../../libs/MediaQuery';

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

export const S = {
  section: (isOpen: boolean) => css`
    display: ${isOpen ? 'block' : 'none'};
    position: fixed;
    border-radius: 0 20px 0 0;
    padding: 20px;
    overflow: auto;
    background-color: #fcfcfc;
    z-index: 100;
    width: 430px;
    height: 100vh;
    animation: ${popupAni} 0.2s linear;
    ${media.mobile`
      width: 100%;
      max-width: 430px;
      min-width: 320px;
    `};
  `,
  h2: css`
    font-size: 24px;
  `,
  photoArea: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 380px;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
    overflow: hidden;
  `,
  addPhotoButton: css`
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    color: #387dff;
    background-color: #cddeff;
    border-radius: 20px;
  `,
  poster: css`
    width: 100%;
    cursor: pointer;
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
      border-bottom-color: #464d52;
    }
  `,
  saveButton: css`
    display: block;
    width: 100%;
    font-size: 16px;
    color: #fcfcfc;
    background-color: #464d52;
    margin-top: 50px;
    padding: 15px 0;
    transition: all 0.2s;
    :hover {
      background-color: #121212;
    }
  `,
  closeButton: css`
    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
  `,
};
