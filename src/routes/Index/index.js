import React, { Fragment } from 'react';
import Head from 'next/head';

import styles from './styles.module.scss';

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>papelitos | pieces of paper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.image} src="/paperplane.png" />
        <h1 className={styles.headline}>papelitos</h1>
        <p>pieces of paper, a game</p>
      </main>
    </Fragment>
  );
};

export default Index;
