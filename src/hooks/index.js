import { useDocumentData } from 'react-firebase-hooks/firestore';
import firebase from '../firebase';

export function useRoom(code) {
  const roomRef = firebase.firestore().collection('rooms').doc(code);
  return useDocumentData(roomRef);
}
