import { css, keyframes } from '@emotion/react';
import media from '../../libs/MediaQuery';

const navAni = keyframes`
  from {
    margin-right: -50px;
    opacity: 0;
  }
  to {
    margin-right: 0;
    opacity: 1;
  }
`;

export const S = {
  nav: (isOpen: boolean) => css`
    display: ${isOpen ? 'block' : 'none'};
    position: ${isOpen ? 'absolute' : 'none'};
    background-color: #fcfcfc;
    width: 430px;
    height: 100vh;
    padding: 70px 20px 20px 20px;
    z-index: 200;
    right: 0;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
    animation: ${navAni} 0.2s linear;
    ${media.mobile`
      width: 100%;
    `}
  `,
  overlay: (isOpen: boolean) => css`
    position: ${isOpen ? 'fixed' : 'none'};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(246, 246, 246, 0.5);
    z-index: 150;
  `,
  messageBox: css`
    padding: 30px 0;
    border-bottom: 1px solid #eee;
  `,
  messageText: css`
    font-size: 20px;
    margin: 20px 0;
    span {
      font-weight: 700;
    }
  `,
  logoutButton: css`
    color: #2b6bff;
    font-weight: 700;
    background-color: #ccdeff;
    padding: 8px 15px;
    border-radius: 20px;
    transition: all 0.2s;
    :hover {
      background-color: #b8d1ff;
    }
  `,
  menu: css`
    padding: 0 20px;
    margin-top: 30px;
    & ~ & {
      margin-top: 45px;
    }
  `,
  menuText: (active: boolean) => css`
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    border-bottom: ${active ? '3px solid #131313' : ''};
    transition: margin-left 0.2s;
    :hover {
      margin-left: 20px;
    }
  `,
  close: css`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    padding: 10px;
  `,
};
