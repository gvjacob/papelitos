import React from 'react';
import { map } from 'lodash';
import { classNames as cn } from 'peculiarity';
import { If } from 'peculiarity/react';
import { partition } from 'lodash';

import { commaJoin } from '../../utils';
import styles from './styles.module.scss';

const PapelitoCount = ({ className, papelitos, text, neutral }) => {
  const { length } = papelitos;

  return (
    <If value={length}>
      <div className={cn(styles.papelitoCount, className)}>
        <div className={cn(styles.count, neutral && styles.neutral)}>
          {length}
        </div>{' '}
        <p>{text}</p>
      </div>
    </If>
  );
};

const PapelitoRound = ({ className, room, playerId }) => {
  const { papelitos } = room;
  const availablePapelitos = papelitos.filter(({ scoredBy }) => !scoredBy);

  const playerPapelitos = map(
    availablePapelitos.filter(({ createdBy }) => playerId === createdBy),
    'papelito',
  );

  const playerPapelitosString = commaJoin(playerPapelitos);

  return (
    <section className={styles.papelitoRound}>
      <If value={availablePapelitos.length}>
        <button className={styles.startRound}>Start round</button>
      </If>
      <PapelitoCount papelitos={availablePapelitos} text={'total papelitos'} />
    </section>
  );
};

export default PapelitoRound;
