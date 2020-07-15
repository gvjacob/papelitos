import { useDocumentData } from 'react-firebase-hooks/firestore';
import { firestore } from '../firebase';

export function useRoom(code) {
  const roomRef = firestore.collection('rooms').doc(code);
  return useDocumentData(roomRef);
}
