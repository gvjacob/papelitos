import React from 'react';
import { classNames as cn } from 'peculiarity';
import styles from './styles.module.scss';

const Avatar = ({ className, player }) => {
  const { color } = player;

  return (
    <div
      className={cn(styles.avatar, className)}
      style={{ backgroundColor: color }}
    />
  );
};

export default Avatar;
