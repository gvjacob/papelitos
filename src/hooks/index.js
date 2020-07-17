import React, { useState, useRef } from 'react';

import { useDocumentData } from 'react-firebase-hooks/firestore';

import { randomInt } from '../utils';
import { firestore } from '../firebase';

export function useRoom(code) {
  const roomRef = firestore.collection('rooms').doc(code);
  return useDocumentData(roomRef, { idField: 'code' });
}

export function useRandomIndex(values, onExhausted) {
  const max = values.length;
  const firstIndex = useRef(randomInt(max));

  const [visited, setVisited] = useState([firstIndex.current]);
  const [index, setIndex] = useState(firstIndex.current);

  const next = () => {
    if (visited.length === max) {
      onExhausted();
      return;
    }

    const index = randomInt(max);

    if (visited.includes(index)) {
      next();
    } else {
      setIndex(index);
      setVisited([...visited, index]);
    }
  };

  const reset = () => {
    const newFirstIndex = randomInt(max);
    firstIndex.current = newFirstIndex;
    setVisited([firstIndex.current]);
    setIndex([firstIndex.current]);
  };

  return { index, next, reset };
}
