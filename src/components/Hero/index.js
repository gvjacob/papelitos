import React from 'react';
import { Papelitos } from '..';

import styles from './styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.image} src="/paperplane.png" />
      <Papelitos className={styles.headline} />
      <p>pieces of paper, a game</p>
    </section>
  );
};

export default Hero;
