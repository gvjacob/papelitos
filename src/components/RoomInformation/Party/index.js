import React from 'react';

import { Avatar } from '../..';
import styles from './styles.module.scss';

const Party = ({ className, players }) => {
  return (
    <div className={styles.party}>
      {players.map((player) => (
        <Avatar className={styles.avatar} player={player} key={player.id} />
      ))}
    </div>
  );
};

export default Party;
