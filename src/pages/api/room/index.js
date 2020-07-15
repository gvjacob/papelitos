import { pick } from 'lodash';
import { v4 } from 'uuid';

import firebase from '../../../firebase';
import { handle } from '../../../utils/api';
import { formatDocumentId } from '../../../utils';

const DEFAULT_ROOM = {
  conferenceLink: '',
  secondsPerRound: 60,
  papelitos: [],
  players: [],
};

export default handle({
  POST: async (req, res) => {
    const configuration = pick(req.body, 'conferenceLink', 'secondsPerRound');
    const room = { ...DEFAULT_ROOM, ...configuration };

    const roomId = formatDocumentId(v4());
    await firebase.firestore().collection('rooms').doc(roomId).set(room);

    res.status(200).json({ code: roomId });
  },
});
