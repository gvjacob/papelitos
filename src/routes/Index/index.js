import React, { Fragment } from 'react';
import Head from 'next/head';

import { Hero, RoomCreator, Footer } from '../../components';

import styles from './styles.module.scss';

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>papelitos | pieces of paper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <RoomCreator className={styles.roomCreator} />
      </main>
      <Footer className={styles.footer} />
    </Fragment>
  );
};

export default Index;
