import React, { useState } from 'react';
import { useFormik } from 'formik';

import wretch from '../../../utils/wretch';
import styles from './styles.module.scss';

const Player = ({ className, player, room }) => {
  const { color } = player;

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
    <div className={styles.player}>
      <div className={styles.avatar} style={{ backgroundColor: color }} />
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
