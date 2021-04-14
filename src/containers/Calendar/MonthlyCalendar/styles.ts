import { css } from '@emotion/react';

export const S = {
  calendar: css`
    user-select: none;
  `,
  head: css`
    display: flex;
    flex-direction: column;
    padding: 12px 20px;
    button {
      display: inline-flex;
      background: transparent;
    }
    .year {
      margin: 0;
      font-weight: 700;
    }
    h3.title {
      font-size: 24px;
      font-weight: 700;
      margin: 0;
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
        }
        .box:hover {
          background-color: #fff;
        }
      }
      .box {
        position: relative;
        display: inline-flex;
        width: calc(100% / 7);
        height: 80px;
        font-size: 14px;
        &:first-of-type {
          color: #ff7777;
        }
        &:last-child {
          color: #588dff;
        }
        &.grayed {
          color: #e7e7e7;
          img {
            opacity: 0.3;
            filter: grayscale(100%);
          }
        }
        &:hover:not(.indicator) {
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
