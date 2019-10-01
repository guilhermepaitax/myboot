import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    margin: 0 auto;
    padding: 0 20px 50px 5px;
  }

  body {
    background: #36393F url(${background}) no-repeat center bottom;
    background-size: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
