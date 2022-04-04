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
    ::-webkit-scrollbar {
      width: 4px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 27px;
    }
    ::-webkit-scrollbar-track {
      margin-top: 3px;
      margin-bottom: 3px;
    }
  }

  a {
    text-decoration: none;
  }

`;
