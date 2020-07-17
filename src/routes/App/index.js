import React, { Fragment } from 'react';
import Head from 'next/head';

import { Footer } from '../../components';
import styles from './styles.module.scss';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <script
          src="https://kit.fontawesome.com/f9c2d11971.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
