import { v4 } from 'uuid';
import { isEmpty } from 'lodash';

import { firestore } from '../../../firebase';
import { handle } from '../../../utils/api';

export default handle({
  POST: async (req, res) => {
    const { code } = req.query;
    const { id, papelito } = req.body;

    const doc = firestore.collection('rooms').doc(code.toUpperCase());
    const room = (await doc.get()).data();

    if (isEmpty(room) || isEmpty(papelito)) {
      return res.status(404).end();
    }

    const player = room.players.find((player) => player.id === id);

    if (isEmpty(player)) {
      return res.status(404).end();
    }

    const papelitoPayload = {
      createdBy: player.id,
      papelito,
      scoredBy: null,
    };

    await doc.update({
      papelitos: [...room.papelitos, papelitoPayload],
      originalPapelitos: [...room.originalPapelitos, papelitoPayload],
    });

    res.status(200).end();
  },
  PUT: async (req, res) => {
    const { code } = req.query;
    const { id, papelito, score } = req.body;

    const doc = firestore.collection('rooms').doc(code.toUpperCase());
    const room = (await doc.get()).data();

    if (isEmpty(room) || isEmpty(papelito)) {
      return res.status(404).end();
    }

    const player = room.players.find((player) => player.id === id);

    if (isEmpty(player)) {
      return res.status(404).end();
    }

    const currentPapelito = room.papelitos.find(
      (roomPapelito) => roomPapelito.papelito === papelito,
    );

    if (isEmpty(currentPapelito)) {
      return res.status(404).end();
    }

    const papelitoPayload = { ...currentPapelito, scoredBy: score ? id : null };

    await doc.update({
      papelitos: room.papelitos.map((roomPapelito) => {
        if (roomPapelito.papelito === papelito) {
          return papelitoPayload;
        } else {
          return roomPapelito;
        }
      }),
    });

    res.status(200).end();
  },
});
