import React, { useState } from 'react';
import { classNames as cn } from 'peculiarity';
import { useFormik } from 'formik';

import { Avatar } from '../..';
import wretch from '../../../utils/wretch';
import styles from './styles.module.scss';

const Player = ({ className, player, room }) => {
  const formik = useFormik({
    initialValues: {
      name: player.name,
    },
    onSubmit: (values) => setName(values.name),
  });

  const setName = (name) => {
    if (name) {
      wretch.url(`/player/${room.code}`).put({ id: player.id, name });
    }
  };

  return (
    <div className={cn(styles.player, className)}>
      <Avatar className={styles.avatar} player={player} />
      <div className={styles.name}>
        <span>You are</span>

        <form onSubmit={formik.handleSubmit}>
          <input
            name="name"
            onBlur={() => setName(formik.values.name)}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </form>
      </div>
    </div>
  );
};

export default Player;
