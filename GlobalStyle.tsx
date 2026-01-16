import { Global, css } from "@emotion/react";

export const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html,
      body,
      #root {
        width: 100%;
        height: 100%;
        min-height: 100%;
      }

      html {
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }

      body {
        line-height: 1.5;
        font-family: system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
          "Open Sans", "Helvetica Neue", sans-serif;

        background-color: #fff;
        color: #000;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      #root {
        display: flex;
        flex-direction: column;
        isolation: isolate;
      }

      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        outline: none;
      }

      button {
        cursor: pointer;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      ul,
      ol {
        list-style: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}
  />
);
