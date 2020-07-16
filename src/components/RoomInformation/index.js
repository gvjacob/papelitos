import React from 'react';
import { partition } from 'lodash';
import { If } from 'peculiarity/react';
import { classNames as cn } from 'peculiarity';

import Player from './Player';
import OtherPlayers from './OtherPlayers';
import { Link } from '..';
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
  const [[player], party] = partition(
    room.players,
    ({ id }) => id === playerId,
  );

  return (
    <footer className={cn(styles.roomInformation, className)}>
      <div className={styles.information}>
        <div className={styles.code}>
          <span>Room code</span>
          <h2>{code}</h2>
        </div>

        <div className={styles.labels}>
          <Label
            label="Conference call"
            value={
              <Link href={room.conferenceLink}>{room.conferenceLink}</Link>
            }
          />
          <Label
            label="Duration per round"
            value={toColon(room.secondsPerRound)}
          />
        </div>
      </div>
      <div>
        <Player player={player} room={room} />
        <OtherPlayers players={party} />
      </div>
    </footer>
  );
};

export default RoomInformation;
