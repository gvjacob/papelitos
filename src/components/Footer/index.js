import React from 'react';
import { classNames as cn } from 'peculiarity';

import styles from './styles.module.scss';

const Footer = ({ className }) => {
  return (
    <footer className={cn(styles.footer, className)}>
      Built by Gino Jacob, with Next.js and Firebase
    </footer>
  );
};

export default Footer;
