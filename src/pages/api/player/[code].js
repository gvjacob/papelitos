import { v4 } from 'uuid';
import { isEmpty, create } from 'lodash';
import { firestore } from 'firebase-admin';
import randomColor from 'randomcolor';

import firebase from '../../../firebase';
import { handle, createUniquePlayerName } from '../../../utils/api';

function getPlayerNames(players = []) {
  return players.map(({ name }) => name);
}

/**
 * Create new player given current room
 */
function createPlayer(room) {
  const { players } = room;

  const id = v4();
  const name = createUniquePlayerName(getPlayerNames(players));
  const admin = isEmpty(players);
  const color = randomColor();

  return { id, name, admin, color };
}

export default handle({
  POST: async (req, res) => {
    const { code } = req.query;

    const doc = firebase
      .firestore()
      .collection('rooms')
      .doc(code.toUpperCase());

    const room = (await doc.get()).data();

    if (isEmpty(room)) {
      return res.status(404).end();
    }

    const player = createPlayer(room);

    await doc.update({
      players: [...room.players, player],
    });

    await res.status(200).json(player);
  },
});
