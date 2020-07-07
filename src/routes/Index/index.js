import React from 'react';
import Head from 'next/head';

import styles from './styles.module.scss';

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>papelitos | pieces of paper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>papelitos</h1>
      </main>
    </div>
  );
};

export default Index;
