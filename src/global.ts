import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    margin: 0;
  }

  body {
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

`;
