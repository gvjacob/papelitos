import React from 'react';
import { If } from 'peculiarity/react';
import { classNames as cn } from 'peculiarity';

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

const RoomInformation = ({ className, room }) => {
  const { code } = room;

  return (
    <footer className={cn(styles.roomInformation, className)}>
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
    </footer>
  );
};

export default RoomInformation;
