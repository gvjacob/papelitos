import { v4 } from 'uuid';
import { isEmpty } from 'lodash';

import { firestore } from '../../../firebase';
import { handle } from '../../../utils/api';

export default handle({
  POST: async (req, res) => {
    console.log(req.query);
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
    };

    await doc.update({
      papelitos: [...room.papelitos, papelitoPayload],
    });

    res.status(200).end();
  },
});
