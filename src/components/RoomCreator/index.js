import React from 'react';
import wretch from 'wretch';
import Cleave from 'cleave.js/react';
import { useFormik } from 'formik';

import { toSeconds } from '../../utils';
import styles from './styles.module.scss';

const RoomCreator = () => {
  const formik = useFormik({
    initialValues: {
      secondsPerRound: 60,
    },

    onSubmit: (values) => {
      wretch('/api/room')
        .post(values)
        .res((response) => console.log(response));
    },
  });

  return (
    <section>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.blocks}>
          <div>
            <p>Link to a conference call. Use your preferred software.</p>
            <input
              name="conferenceLink"
              onChange={formik.handleChange}
              placeholder="https://zoom.us/meeting-id"
            />
            <span>or, add later</span>
          </div>

          <div>
            <p>Set the time limit for each drawing round</p>
            <Cleave
              className={styles.durationInput}
              name="secondsPerRound"
              options={{ time: true, timePattern: ['m', 's'] }}
              onChange={(e) => {
                formik.setFieldValue(
                  'secondsPerRound',
                  toSeconds(e.target.rawValue),
                );
              }}
              placeholder="1:00"
            />
          </div>
        </div>

        <button className={styles.submit} type="submit">
          Create Room
        </button>
      </form>
    </section>
  );
};

export default RoomCreator;
