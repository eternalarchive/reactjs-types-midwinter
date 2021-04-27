import { css } from '@emotion/react';

export const S = {
  h2: css`
    font-size: 24px;
    margin-bottom: 60px;
  `,
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
      border-bottom-color: #131313;
    }
  `,
  errorMsg: css`
    color: #ff7171;
    font-size: 14px;
  `,
  redirectionText: css`
    color: #131313;
  `,
  redirection: css`
    margin-top: 60px;
  `,
  loginButton: css`
    display: block;
    width: 100%;
    font-size: 16px;
    color: #fcfcfc;
    background-color: #131313;
    margin-top: 20px;
    padding: 15px 0;
    transition: all 0.2s;
    :hover {
      background-color: #303030;
    }
  `,
};
