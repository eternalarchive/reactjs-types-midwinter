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
    p {
      width: 33.3%;
      :not(:first-of-type) {
        text-align: right;
      }
    }
    :first-of-type {
      border-bottom: 2px solid #464d52;
      font-weight: 700;
    }
    :hover:not(:first-of-type) {
      background-color: #f2f6ff;
    }
  `,
};
