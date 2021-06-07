import { css } from '@emotion/react';

export const S = {
  ticketItem: (poster: string) => css`
    color: #fcfcfc;
    width: 300px;
    height: 400px;
    position: relative;
    border-radius: 10px;
    padding: 30px 20px;
    cursor: pointer;
    overflow-y: auto;
    transition: all 0.2s;
    ::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 400px;
      z-index: 0;
      background-color: #eee;
      background-image: url('${poster}');
      background-repeat: no-repeat;
      background-size: cover;
      filter: brightness(40%);
      border-radius: 10px;
    }
    :not(:first-of-type) {
      margin-top: 30px;
    }
    :hover {
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    }
    p,
    span {
      z-index: 1;
      position: relative;
      opacity: 0.9;
      margin: 10px 0;
    }
  `,
  category: css`
    font-weight: 700;
    ::before {
      content: '| ';
      font-weight: 700;
    }
  `,
  title: css`
    z-index: 1;
    position: relative;
    opacity: 0.9;
    margin: 5px 0;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  `,
  schedule: css`
    ::before {
      content: 'DATE / TIME';
      display: block;
      font-weight: 700;
    }
  `,
  place: css`
    ::before {
      content: 'THEATER';
      display: block;
      font-weight: 700;
    }
  `,
  seat: css`
    ::before {
      content: 'SEAT';
      display: block;
      font-weight: 700;
    }
  `,
  price: css`
    ::before {
      content: 'PRICE';
      display: block;
      font-weight: 700;
    }
  `,
  casting: css`
    margin-top: 10px;
    text-align: center;
  `,
  person: css`
    font-size: 10px;
    padding: 3px 8px;
    border: 1px solid #fcfcfc;
    border-radius: 15px;
    & ~ & {
      margin-left: 5px;
    }
  `,
  memo: css`
    ::before {
      content: 'MEMO';
      display: block;
      font-weight: 700;
    }
  `,
};
