import { css } from '@emotion/react';

export const S = {
  section: css``,
  allList: css`
    font-size: 18px;
  `,
  listItem: css`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    :first-of-type {
      border-bottom: 2px solid #131313;
      font-weight: 700;
    }
    :hover:not(:first-of-type) {
      background-color: #f2f6ff;
    }
  `,
  button: css`
    display: block;
    margin: 0 auto 20px auto;
  `,
};
