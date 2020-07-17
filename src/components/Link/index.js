import React from 'react';
import NextLink from 'next/link';

import { isExternalURL } from '../../utils';
import styles from './styles.module.scss';

const Link = ({ href, ...props }) => {
  if (!href) {
    return null;
  }

  return isExternalURL(href) ? (
    <a href={href} target="_blank" {...props} />
  ) : (
    <NextLink href={href} {...props} />
  );
};

export default Link;
