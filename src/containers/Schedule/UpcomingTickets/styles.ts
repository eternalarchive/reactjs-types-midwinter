import { css } from '@emotion/react';

export const S = {
  section: css`
    position: relative;
    margin: 45px 0;
  `,
  sectionTitle: css`
    font-size: 24px;
    margin-bottom: 30px;
  `,
  viewAll: css`
    padding: 10px 20px;
    font-size: 16px;
    color: #fcfcfc;
    background-color: #131313;
    border-radius: 20px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.2s;
    :hover {
      background-color: #303030;
    }
  `,
  more: css`
    display: block;
    width: 150px;
    height: 40px;
    background-color: #fcfcfc;
    border: 1px solid #d1d1d1;
    border-radius: 20px;
    color: #868686;
    margin: 30px auto 0 auto;
    transition: all 0.2s;
    :hover {
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
    }
  `,
};
