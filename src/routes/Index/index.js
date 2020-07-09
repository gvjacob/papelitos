import React, { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../../components/Hero';

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
      </main>
    </Fragment>
  );
};

export default Index;
