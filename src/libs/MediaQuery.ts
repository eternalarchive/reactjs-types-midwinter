/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';

const sizes = {
  desktop: 1025,
  mobile: 430,
};

const sizeCheck = (label: string) => {
  if (label === 'desktop') return `all and (min-width: ${sizes[label]}px)`;
  if (label === 'mobile') return `all and (max-width: ${sizes[label]}px)`;
};

const media = Object.keys(sizes).reduce((points: any, label) => {
  points[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
    @media ${sizeCheck(label)} {
      ${css(literals, ...args)}
    }
  `;

  return points;
}, {} as Record<keyof typeof sizes, (literals: TemplateStringsArray, ...args: unknown[]) => string>);

export default media;
