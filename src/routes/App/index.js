import React, { Fragment } from 'react';

import { Footer } from '../../components';
import styles from './styles.module.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
