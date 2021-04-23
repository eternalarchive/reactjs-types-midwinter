import { css } from '@emotion/react';

export const S = {
  calendar: css`
    user-select: none;
    padding-bottom: 20px;
  `,
  dateInfo: css`
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
  `,
  year: css`
    order: 1;
    margin-left: 5px;
    font-size: 14px;
  `,
  title: css`
    order: 0;
    font-size: 24px;
    margin: 0;
  `,
  prevMonthButton: css`
    order: 0;
  `,
  nextMonthButton: css`
    order: 2;
  `,
  head: css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    padding: 20px;
    button {
      background: transparent;
      outline: none;
      width: 20px;
      display: block;
    }
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
      .box {
        position: relative;
        display: inline-flex;
        width: calc(100% / 7);
        height: 80px;
        font-size: 12px;
        transition: all 0.2s;
        &:first-of-type,
        &:last-child {
          color: #2b6bff;
        }
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
            font-weight: 700;
            border-radius: 5px;
            background-color: #f7fbff;
            text-align: center;
          }
        }
        img {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 5px;
        }
        span.text {
          border-radius: 5px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
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
