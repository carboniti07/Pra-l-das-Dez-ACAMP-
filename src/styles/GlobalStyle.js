import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }

  body {
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color: #F4F7FF;
    background: #070A12;
    overflow-x: hidden;
  }

  a { color: inherit; }
`;
