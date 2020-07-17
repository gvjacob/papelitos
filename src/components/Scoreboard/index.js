import React from 'react';
import { Cond, If, Else } from 'peculiarity/react';
import { filter, isEmpty, partition } from 'lodash';
import { classNames as cn } from 'peculiarity';

import Card from './Card';
import styles from './styles.module.scss';

const Scoreboard = ({ className, room, playerId }) => {
  const { papelitos } = room;
  const showScoreboard = !isEmpty(filter(papelitos, 'scoredBy'));

  const [[player], party] = partition(
    room.players,
    ({ id }) => id === playerId,
  );

  return (
    <section className={cn(styles.scoreboard, className)}>
      <Cond>
        <If value={showScoreboard}>
          <div className={styles.cards}>
            <div className={styles.player}>
              <Card
                className={cn(styles.card, styles.player)}
                player={player}
                papelitos={papelitos}
              />
            </div>
            {party.map((player) => (
              <Card
                className={styles.card}
                player={player}
                papelitos={papelitos}
                key={player.id}
              />
            ))}
          </div>
        </If>
        <Else>
          <img className={styles.paperplane} src="/paperplane.png" />
        </Else>
      </Cond>
    </section>
  );
};

export default Scoreboard;
