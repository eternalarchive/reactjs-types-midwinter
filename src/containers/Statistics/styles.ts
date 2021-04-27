import { css } from '@emotion/react';

export const S = {
  section: css`
    min-height: calc(100vh - 130px);
  `,
  tab: css`
    display: flex;
  `,
  tabItem: (isActive: boolean) => css`
    display: inline-block;
    font-size: 28px;
    color: ${isActive ? '#131313' : '#b2b2b2'};
    font-weight: ${isActive ? '700' : 'normal'};
    margin-left: 20px;
    cursor: pointer;
    ::before {
      content: '#';
    }
    :hover {
      color: #131313;
      font-weight: 700;
    }
  `,
};
