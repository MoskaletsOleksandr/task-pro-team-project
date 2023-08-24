import { Global, css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        `}
      </style>
      <Global
        styles={css`
          root {
            --timing-function: cubic-bezier(0.4, 0, 0.2, 1);

            --auth-bg-color: #bedbb0;
            --auth-input-color: #1f1f1f;
          }

          body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 14px;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }
          ul,
          ol {
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 0;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
          }

          .dark {
            --primary-text-color: #fff;
            --secondary-text-color: #ffffff80;

            --btn-text-color: #161616;
            --button-bg-color: #bedbb0;
            --button-bg-color-hover: #9dc888;
            --button-plus-bg-color: #bedbb0;
            --button-plus-bg-color-hover: #9dc888;

            --header-bg-color: #161616;

            --modal-bg-color: #151515;
          }
          .light {
            --primary-text-color: #161616;
            --secondary-text-color: ##161616b2;

            --btn-text-color: #161616;
            --button-bg-color: #bedbb0;
            --button-bg-color-hover: #9dc888;
            --button-plus-bg-color: #bedbb0;
            --button-plus-bg-color-hover: #9dc888;

            --header-bg-color: #fcfcfc;

            --modal-bg-color: rgba(252, 252, 252, 1);
          }

          .violet {
            --primary-text-color: #161616;
            --secondary-text-color: ##161616b2;

            --btn-text-color: #fff;
            --button-bg-color: #5255bc;
            --button-bg-color-hover: #7b7ede;
            --button-plus-bg-color: #979cea;
            --button-plus-bg-color-hover: #b8bcfd;

            --header-bg-color: #ffffff;

            --modal-bg-color: rgba(252, 252, 252, 1);
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
