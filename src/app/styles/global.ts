'use client';

import { createGlobalStyle as css } from 'styled-components';

export const GlobalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    background-color: #f5f7f9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
      var(--font-roboto), sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
