import React from 'react';
import { get } from 'lodash';
import { If } from 'peculiarity/react';
import Head from 'next/head';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';

import { Papelitos, PapelitoInput, RoomInformation } from '../../components';
import { useRoom } from '../../hooks';
import wretch from '../../utils/wretch';
import styles from './styles.module.scss';

const Room = ({ playerId, code }) => {
  const [room, loading, error] = useRoom(code);

  if (error) {
    return <Error statusCode={404} />;
  }

  return (
    <If value={!loading}>
      <Head>
        <title>papelitos | {get(room, 'code')}</title>
      </Head>
      <main className={styles.room}>
        <Papelitos className={styles.headline} />
        <PapelitoInput />
      </main>
      <RoomInformation playerId={playerId} room={room} />
    </If>
  );
};

export async function getServerSideProps(context) {
  const { code } = context.query;
  const { id: playerId } = parseCookies(context);

  const { id } = await wretch
    .url(`/player/${code}`)
    .post({ id: playerId })
    .notFound(() => {})
    .json();

  setCookie(context, 'id', id);

  return {
    props: {
      playerId,
      code,
    },
  };
}

export default Room;
