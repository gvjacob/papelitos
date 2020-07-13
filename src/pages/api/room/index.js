import { pick } from 'lodash';
import { v4 } from 'uuid';

import firebase from '../../../firebase';
import handle from '../../../utils/handle';
import { formatDocumentId } from '../../../utils';

export default handle({
  POST: async (req, res) => {
    const room = pick(req.body, 'conferenceLink', 'secondsPerRound');

    const roomId = formatDocumentId(v4());
    await firebase.firestore().collection('rooms').doc(roomId).set(room);

    res.status(200).end();
  },
});
