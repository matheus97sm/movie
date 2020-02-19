import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased !important;
    padding-bottom: 62px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  body, input, button {
    color: #8492A6;
    font-size: 16px;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    line-height: 24px;
  }

  button {
    cursor: pointer;
  }

  @media screen and (min-width: 1050px) {
    body {
        padding-bottom: 88px;
    }
  }
`;
