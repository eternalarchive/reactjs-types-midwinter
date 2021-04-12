import { css } from '@emotion/react';
import media from '../../libs/MediaQuery';

export const S = {
  nav: (isOpen: boolean) => css`
    display: ${isOpen ? 'block' : 'none'};
    position: fixed;
    background-color: #fff;
    width: 430px;
    height: 100vh;
    padding: 70px 20px 20px 20px;
    z-index: 100;
    ${media.mobile`
      width: 100%;
      max-width: 430px;
      min-width: 320px;
    `}
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
    :hover {
      margin-left: 20px;
      border-bottom: 3px solid black;
    }
    margin-left: ${active ? '20px' : '0px'};
    border-bottom: ${active ? '3px solid black' : ''};
  `,
  close: css`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    padding: 10px;
  `,
};
