import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif, Helvetica, Arial, system-ui;
    font-size: 12px;
	  line-height: 1.2;
    letter-spacing: 0.8px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  a:visited {
    color: inherit;
  }

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;
