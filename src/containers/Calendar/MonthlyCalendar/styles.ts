import { css } from '@emotion/react';

export const S = {
  calendar: css`
    user-select: none;
    padding-bottom: 20px;
    border-bottom: 1px solid #e7e7e7;
  `,
  head: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px 15px 15px;
    button {
      background: transparent;
      outline: none;
      width: 20px;
      display: block;
    }
  `,
  dateInfo: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  year: css`
    order: 1;
    margin-left: 5px;
    font-size: 14px;
  `,
  title: css`
    order: 0;
    font-size: 32px;
    text-transform: uppercase;
    margin: 0;
  `,
  buttonBox: css`
    display: flex;
    width: 20%;
    justify-content: space-between;
  `,
  line: css`
    width: 1px;
    background-color: #e7e7e7;
  `,
  body: css`
    .row {
      display: flex;
      cursor: pointer;
      &:first-of-type {
        cursor: initial;
        .box {
          font-weight: 700;
          height: 50px;
        }
      }
      .indicator {
        &:first-of-type {
          color: #ff7777;
        }
        &:last-child {
          color: #007fff;
        }
      }
      .box {
        position: relative;
        display: inline-flex;
        width: calc(100% / 7);
        height: 80px;
        font-size: 12px;
        transition: box-shadow 0.2s;
        padding: 1px;
        &.grayed {
          color: #e7e7e7;
          cursor: default;
          img {
            opacity: 0.3;
            filter: grayscale(100%);
          }
        }
        &:hover:not(.indicator):not(.grayed) {
          border-radius: 5px;
          box-shadow: 0 0 10px 0 rgba(93, 93, 93, 0.15);
        }
        &.today {
          span.text {
            align-items: center;
            flex-direction: column;
            font-weight: 700;
            font-size: 16px;
            border-radius: 5px;
            background-color: #fcfcfc;
            border: 1px solid #007fff;
            text-align: center;
            ::after {
              font-weight: 400;
              font-size: 10px;
              content: 'TODAY';
              margin-top: 5px;
            }
          }
        }
        img {
          width: 100%;
          height: 100%;
          overflow: hidden;
          :nth-of-type(n + 2) {
            margin-left: 1px;
          }
        }
        span.text {
          border-radius: 5px;
          display: inline-flex;
          justify-content: center;
          width: 100%;
          padding: 5px 0;
        }
        span.week {
          font-size: 10px;
          font-weight: 900;
          align-items: center;
        }
      }
    }
  `,
};
