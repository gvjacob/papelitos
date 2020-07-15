import React from 'react';

import styles from './styles.module.scss';

const Player = ({ className, player }) => {
  const { name, color } = player;

  return (
    <div className={styles.player}>
      <div className={styles.avatar} style={{ backgroundColor: color }} />
      <div className={styles.name}>
        <span>You are</span>
        <input value={name} />
      </div>
    </div>
  );
};

export default Player;
