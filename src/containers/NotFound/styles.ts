import { css, keyframes } from '@emotion/react';

const emojiAni = keyframes`
0% {
  transform: rotate(-5deg);
}
50% {
  transform: rotate(5deg);
}
100% {
  transform: rotate(-5deg);
}
`;

export const S = {
  section: css`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #131313;
    font-weight: 700;
  `,
  emoji: css`
    font-size: 96px;
    animation: ${emojiAni} 1.5s infinite;
    transition: all 0.2s;
  `,
  notFound: css`
    color: #2b6bff;
    font-size: 80px;
  `,
  notFoundText: css`
    font-size: 32px;
    color: #d0d0d0;
  `,
  findPage: css`
    font-size: 24px;
    color: #9c9c9c;
  `,
  gohome: css`
    margin-top: 20px;
  `,
};
