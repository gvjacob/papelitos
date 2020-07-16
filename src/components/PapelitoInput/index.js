import React from 'react';
import { classNames as cn } from 'peculiarity';
import { useFormik } from 'formik';

import wretch from '../../utils/wretch';
import { getRandomly } from '../../utils';
import styles from './styles.module.scss';

const PapelitoInput = ({ className, room, playerId }) => {
  const placeholders = [
    'Write something brilliant...',
    'Once upon a time, ...',
  ];

  const formik = useFormik({
    initialValues: {
      papelito: '',
    },
    onSubmit: (values) => {
      wretch
        .url(`/papelito/${room.code}`)
        .post({ id: playerId, papelito: values.papelito })
        .res(formik.resetForm)
        .catch(formik.resetForm);
    },
  });

  return (
    <form className={cn(styles.form, className)} onSubmit={formik.handleSubmit}>
      <input
        name="papelito"
        onChange={formik.handleChange}
        value={formik.values.papelito}
        placeholder={getRandomly(placeholders)}
      />
      <button type="submit">
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};

export default PapelitoInput;
