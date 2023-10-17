import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 100%;
    @media (max-width: 800px) {
      font-size: 90%;
    }
  }

  html > body > #root > div {
    height: 100vh;
    background-color: #000000;
    
  }

  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;

    div#root {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 528px;
      background-color: #000000;
    }
  }
`
