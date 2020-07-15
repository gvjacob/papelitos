import React from 'react';
import { classNames as cn } from 'peculiarity';
import { useFormik } from 'formik';

import { getRandomly } from '../../utils';
import styles from './styles.module.scss';

const PapelitoInput = ({ className }) => {
  const placeholders = [
    'Write something brilliant...',
    'Once upon a time, ...',
  ];

  const formik = useFormik({
    initialValues: {
      papelitoInput: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className={cn(styles.form, className)} onSubmit={formik.handleSubmit}>
      <input
        name="papelitoInput"
        onChange={formik.handleChange}
        placeholder={getRandomly(placeholders)}
      />
      <button type="submit">
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};

export default PapelitoInput;
