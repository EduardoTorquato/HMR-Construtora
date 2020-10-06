import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&family=Open+Sans&display=swap');
  * {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    color:#1D1D1B;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font: 16px 'Roboto';
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }
  h1, h2, h3, h4, h5, h6, input, button{
    font-family: 'Roboto', sans-serif;
  }
  hr{
    border: none;
    border-top: 1px solid #999;
  }
  .mt {
    margin-top: 20px;
  }
  .text-center{
    text-align: center;
  }
  .mobile-only{
    display: none;
  }
`;
