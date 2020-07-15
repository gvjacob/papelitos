import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const Papelitos = ({ className }) => {
  return <h1 className={cn(styles.headline, className)}>papelitos</h1>;
};

export default Papelitos;
