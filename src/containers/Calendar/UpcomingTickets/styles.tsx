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
    color: #fff;
    background-color: #000;
    border-radius: 20px;
    position: absolute;
    top: 0;
    right: 0;
  `,
  more: css`
    display: block;
    width: 150px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 20px;
    color: #7f7f7f;
    margin: 30px auto 0 auto;
    :hover {
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
    }
  `,
};
