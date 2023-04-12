import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-100: #F2F2F2;
    --gray-200: #D9D9D9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #0D0D0D;

    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;

    --purple: #8284FA;
    --purple-dark: #5E60CE;

    --yellow: #F7B32B;
    --green: #8ACB88;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size normal === 16px
  // Accessibility
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--gray-600);
  }

  main {
    max-width: 736px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`