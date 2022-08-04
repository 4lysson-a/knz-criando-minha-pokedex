import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E83838;
    --grey: #D9D6D6;
    --white: #FAFAFA;
    --black: #1E1E1E;
  }

  html,#root, body{
    margin: 0;
    padding: 0;
  }

  body{
    background: var(--grey);
  }

  body,#root,html{
    height: 100%;
  }

  h1,p,h2{
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
