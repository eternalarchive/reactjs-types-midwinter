import { css } from '@emotion/react';

export const customStyles = css`
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('Spoqa Han Sans Neo Bold'),
      url('/fonts/SpoqaHanSansNeoBold.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeoBold.woff') format('woff'),
      url('/fonts/SpoqaHanSansNeoBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('Spoqa Han Sans Neo Regular'),
      url('/fonts/SpoqaHanSansNeoRegular.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeoRegular.woff') format('woff'),
      url('/fonts/SpoqaHanSansNeoRegular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 300;
    src: local('Spoqa Han Sans Neo Light'),
      url('/fonts/SpoqaHanSansNeoLight.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeoLight.woff') format('woff'),
      url('/fonts/SpoqaHanSansNeoLight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 100;
    src: local('Spoqa Han Sans Neo Thin'),
      url('/fonts/SpoqaHanSansNeoThin.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeoThin.woff') format('woff'),
      url('/fonts/SpoqaHanSansNeoThin.ttf') format('truetype');
  }

  body {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-display: swap;
    font-size: 12px;
    margin: 0;
  }

  a {
    text-decoration: none;
    :visited {
      color: inherit;
    }
  }

  button {
    border: 0;
    cursor: pointer;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  p {
    margin: 0;
  }

  .a11y-hidden {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    background-color: transparent;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }
`;
