import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.green500};
  }

  body {
    ${({ theme }) => `
      background-color: ${theme.gray900};
      color: ${theme.gray300};
    `}
  }

  body, input, textarea, button {
    font-family: 'Fira Code', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
