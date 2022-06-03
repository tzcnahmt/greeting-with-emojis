import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  }

  body,
  html {
  width: 100%;
  height: 100%;
  }

  body {
  margin: 0;
  font-family: 'Satoshi', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: 'Satoshi', sans-serif;
  }
  a:link,
  a {
  color: red;
  }
`;

export default GlobalStyle;
