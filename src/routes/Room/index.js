import React from 'react';
import Error from 'next/error';
import { useRouter } from 'next/router';

import wretch from '../../utils/wretch';
import styles from './styles.module.scss';

const Room = ({ room }) => {
  if (!room) {
    return <Error statusCode={404} />;
  }

  return <section>{JSON.stringify(room, null, 2)}</section>;
};

export async function getServerSideProps(context) {
  const { code } = context.query;

  const room = await wretch
    .url(`/room/${code}`)
    .get()
    .notFound(() => null)
    .json();

  return {
    props: {
      room,
    },
  };
}

export default Room;
