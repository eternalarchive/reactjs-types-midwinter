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
    width: 300px;
    height: 100vh;
    padding: 70px 20px 20px 20px;
    z-index: 200;
    right: 0;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
    animation: ${navAni} 0.2s linear;
    ${media.mobile`
      width: 70%;
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
  menu: css`
    & ~ & {
      margin-top: 30px;
    }
  `,
  menuText: (active: boolean) => css`
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    margin-left: ${active ? '20px' : '0px'};
    border-bottom: ${active ? '3px solid #464d52' : ''};
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
