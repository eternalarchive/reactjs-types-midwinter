import { css, keyframes } from '@emotion/react';

const ticketAni = keyframes`
  from {
    transform: translate(0, 50px);
    opacity: 0;
  }
  to {
    transform: translate(0, 30px);
    opacity: 1;
  }
`;

export const S = {
  section: css`
    min-height: calc(100vh - 130px);
  `,
  title: css`
    font-size: 24px;
    margin: 0;
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
    animation: ${ticketAni} 0.2s linear;
  `,
};
