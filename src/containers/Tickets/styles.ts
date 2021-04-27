import { css } from '@emotion/react';

export const S = {
  section: css`
    min-height: calc(100vh - 130px);
  `,
  search: css`
    display: block;
    width: 100%;
    background-color: #fcfcfc;
    border: 0px;
    border-bottom: 2px solid #d0d0d0;
    padding: 15px 0 15px 30px;
    margin: 15px 0;
    font-size: 22px;
    outline: none;
    ::placeholder {
      color: #d0d0d0;
      font-size: 18px;
    }
    :focus {
      border-bottom-color: #131313;
    }
  `,
  label: css`
    display: block;
    position: relative;
  `,
  searchIcon: css`
    position: absolute;
    top: 15px;
    left: 0px;
  `,
  ticket: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
  `,
};
