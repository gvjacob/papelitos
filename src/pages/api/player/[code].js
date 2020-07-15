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
function createPlayer(room, id) {
  const { players } = room;

  const name = createUniquePlayerName(getPlayerNames(players));
  const admin = isEmpty(players);
  const color = randomColor();

  return { id: id || v4(), name, admin, color };
}

export default handle({
  POST: async (req, res) => {
    const { code } = req.query;
    const { id } = req.body;

    const doc = firebase
      .firestore()
      .collection('rooms')
      .doc(code.toUpperCase());

    const room = (await doc.get()).data();

    if (isEmpty(room)) {
      return res.status(404).end();
    }

    const playerFromRoom = room.players.find((player) => player.id === id);

    if (isEmpty(playerFromRoom)) {
      const player = createPlayer(room, id);

      await doc.update({
        players: [...room.players, player],
      });

      return res.status(200).json(player);
    }

    res.status(200).json(playerFromRoom);
  },
});
