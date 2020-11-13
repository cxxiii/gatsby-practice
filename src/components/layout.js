import React from 'react';
import { Global, css } from '@emotion/react';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #555;
          font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 18px;
          line-height: 1.4;

          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            /* Anything that comes AFTER a heading */
            + * {
              margin-top: 0.5rem;
            }
          }

          /* Bolded text has darker color */
          strong {
            color: #222;
          }

          /* limit top space of lists */
          li {
            margin-top: 0.25;
          }
        }
      `}
    />
    <Header />
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;