import React, { Fragment } from 'react';

import { Footer } from '../../components';
import styles from './styles.module.scss';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Footer className={styles.footer} />
    </Fragment>
  );
}

export default App;
