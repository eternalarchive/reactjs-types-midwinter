import { css } from '@emotion/react';

export const S = {
  dayContainer: css`
    & ~ & {
      margin-top: 25px;
    }
  `,
  ticketsBlock: css`
    margin-top: 10px;
  `,
  title: css`
    font-size: 16px;
    font-weight: 700;
  `,
};
