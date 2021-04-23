import { css } from '@emotion/react';

export const S = {
  tab: css`
    display: flex;
  `,
  tabItem: (isActive: boolean) => css`
    display: inline-block;
    font-size: 28px;
    color: ${isActive ? '#464d52' : '#b2b2b2'};
    font-weight: ${isActive ? '700' : 'normal'};
    margin-left: 20px;
    cursor: pointer;
    ::before {
      content: '#';
    }
    :hover {
      color: #464d52;
      font-weight: 700;
    }
  `,
};
