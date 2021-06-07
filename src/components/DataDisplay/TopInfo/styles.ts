import { css } from '@emotion/react';

export const S = {
  info: css`
    display: flex;
    justify-content: space-around;
  `,
  infoItem: css`
    flex-basis: 48%;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
    padding: 20px;
    border-radius: 10px;
  `,
  infoItemText: css`
    font-weight: 700;
    & ~ & {
      font-size: 18px;
      color: #2b6bff;
      margin-top: 10px;
    }
  `,
};
