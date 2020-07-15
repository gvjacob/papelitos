import firebase from '../../../firebase';
import { handle } from '../../../utils/api';

export default handle({
  GET: async (req, res) => {
    const { code } = req.query;

    const doc = await firebase
      .firestore()
      .collection('rooms')
      .doc(code.toUpperCase())
      .get();

    const room = doc.data();
    return room ? res.status(200).json(room) : res.status(404).end();
  },
});
