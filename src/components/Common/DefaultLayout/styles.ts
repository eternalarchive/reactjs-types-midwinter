import { css } from '@emotion/react';
import media from '../../../libs/MediaQuery';

export const S = {
  outerLayout: css`
    display: flex;
    justify-content: center;
  `,
  innerLayout: css`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    width: 430px;
    min-height: 100vh;
    padding: 0 20px 30px 20px;
    background-color: #fcfcfc;
    position: relative;
    ${media.mobile`
      max-width: 430px;
      min-width: 320px;
    `};
  `,
};
