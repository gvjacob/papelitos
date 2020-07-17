import React from 'react';
import { classNames as cn } from 'peculiarity';
import { map } from 'lodash';

import { Avatar } from '../../';
import { commaJoin } from '../../../utils';
import styles from './styles.module.scss';

const Card = ({ className, player, papelitos }) => {
  const scoredPapelitos = map(
    papelitos.filter(({ scoredBy }) => scoredBy === player.id),
    'papelito',
  );

  const score = scoredPapelitos.length;

  return (
    <div className={cn(styles.card, className)}>
      <Avatar className={styles.avatar} player={player} />
      <h2>{player.name}</h2>
      <span>{score}</span>
      <p>{commaJoin(scoredPapelitos)}</p>
    </div>
  );
};

export default Card;
