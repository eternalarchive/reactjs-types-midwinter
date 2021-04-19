import { css } from '@emotion/react';

export const S = {
  tooltip: css`
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #2b6bff;
    border-radius: 5px;
  `,
  tooltipText: css`
    :first-of-type {
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 5px;
      color: #2b6bff;
    }
  `,
};
