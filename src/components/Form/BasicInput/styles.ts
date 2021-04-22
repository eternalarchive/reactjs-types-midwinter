import { css } from '@emotion/react';

export const S = {
  textInput: css`
    display: block;
    width: 100%;
    background-color: #fcfcfc;
    border: 0px;
    border-bottom: 2px solid #d0d0d0;
    padding: 15px 0;
    margin: 15px 0;
    font-size: 22px;
    outline: none;
    ::placeholder {
      color: #d0d0d0;
      font-size: 22px;
    }
    :focus {
      border-bottom-color: #464d52;
    }
  `,
};
