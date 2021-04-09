import { css } from '@emotion/react';

export const S = {
  h2: css`
    font-size: 24px;
    margin-bottom: 60px;
  `,
  textInput: css`
    display: block;
    width: 100%;
    background-color: #fff;
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
      border-bottom-color: black;
    }
  `,
  errorMsg: css`
    color: #ff7171;
    font-size: 14px;
  `,
  redirectionText: css`
    color: #000;
  `,
  redirection: css`
    margin-top: 60px;
  `,
  loginButton: css`
    display: block;
    width: 100%;
    font-size: 16px;
    color: #fff;
    background-color: #000;
    margin-top: 20px;
    padding: 15px 0;
  `,
};
