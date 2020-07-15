import React from 'react';
import { If } from 'peculiarity/react';
import { classNames as cn } from 'peculiarity';

import Player from './Player';
import { toColon } from '../../utils';
import styles from './styles.module.scss';

const Label = ({ label, value }) => {
  return (
    <If value={value}>
      <p className={styles.label}>
        <span>{label}: </span>
        <span>{value}</span>
      </p>
    </If>
  );
};

const RoomInformation = ({ className, playerId, room }) => {
  const { code } = room;
  const player = room.players.find(({ id }) => id === playerId);

  return (
    <footer className={cn(styles.roomInformation, className)}>
      <div className={styles.information}>
        <div className={styles.code}>
          <span>Room code</span>
          <h2>{code}</h2>
        </div>

        <div className={styles.labels}>
          <Label label="Conference call" value={room.conferenceLink} />
          <Label
            label="Duration per round"
            value={toColon(room.secondsPerRound)}
          />
        </div>
      </div>
      <div>
        <Player player={player} />
      </div>
    </footer>
  );
};

export default RoomInformation;
