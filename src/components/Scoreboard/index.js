import React from 'react';
import { classNames as cn } from 'peculiarity';
import styles from './styles.module.scss';

const Scoreboard = ({ className }) => {
  return (
    <section className={cn(styles.scoreboard, className)}>
      <img className={styles.paperplane} src="/paperplane.png" />
    </section>
  );
};

export default Scoreboard;
