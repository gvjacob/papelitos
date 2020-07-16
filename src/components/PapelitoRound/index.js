import React from 'react';
import { classNames as cn } from 'peculiarity';
import { partition } from 'lodash';

import styles from './styles.module.scss';

const PapelitoCount = ({ className, papelitos, text, neutral }) => {
  return (
    <div className={styles.papelitoCount}>
      <div className={cn(styles.count, neutral && styles.neutral)}>
        {papelitos.length}
      </div>{' '}
      {text}
    </div>
  );
};

const PapelitoRound = ({ className, room, playerId }) => {
  const { papelitos } = room;
  const availablePapelitos = papelitos.filter(({ scoredBy }) => !scoredBy);

  const playerPapelitos = availablePapelitos.filter(
    ({ createdBy }) => playerId === createdBy,
  );

  const playerPapelitosString = playerPapelitos.reduce(
    (acc, { papelito }, i) => `${acc}${i !== 0 ? ', ' : ''}${papelito}`,
    '',
  );

  return (
    <section className={styles.papelitoRound}>
      <PapelitoCount
        papelitos={playerPapelitos}
        text={playerPapelitosString}
        neutral
      />
      <button className={styles.startRound}>Start round</button>
      <PapelitoCount papelitos={availablePapelitos} text={'total papelitos'} />
    </section>
  );
};

export default PapelitoRound;
