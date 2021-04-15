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
  ticketArea: css`
    display: flex;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    :hover {
      background-color: #fafcff;
    }
    & ~ & {
      margin-top: 10px;
    }
  `,
  date: css`
    font-size: 16px;
    font-weight: 700;
  `,
  infoBox: css`
    order: 2;
    align-self: center;
  `,
  category: css`
    font-size: 12px;
    color: #c4c4c4;
    text-transform: uppercase;
  `,
  title: css`
    font-size: 18px;
  `,
  schedule: css`
    font-size: 12px;
  `,
  poster: css`
    order: 1;
    width: 50px;
    height: 68px;
    margin-right: 20px;
  `,
};
