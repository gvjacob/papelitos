import React from 'react';
import styles from './styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.image} src="/paperplane.png" />
      <h1 className={styles.headline}>papelitos</h1>
      <p>pieces of paper, a game</p>
    </section>
  );
};

export default Hero;
