import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useTimer } from 'use-timer';

import { useRandomIndex } from '../../../hooks';
import { toColon } from '../../../utils';
import wretch from '../../../utils/wretch';
import styles from './styles.module.scss';

const RoundModal = ({
  className,
  playerId,
  duration,
  papelitos: availablePapelitos,
  code,
  isOpen,
  onClose,
}) => {
  const [papelitos, setPapelitos] = useState(availablePapelitos);

  const { index, next: nextIndex, reset: resetIndex } = useRandomIndex(
    papelitos,
    onClose,
  );

  const { time, start, reset } = useTimer({
    endTime: 0,
    initialTime: duration,
    timerType: 'DECREMENTAL',
    onTimeOver: onClose,
  });

  useEffect(() => {
    if (isOpen) {
      setPapelitos(availablePapelitos);
      resetIndex();
      reset();
      start();
    } else {
      resetIndex();
    }
  }, [isOpen]);

  const onYes = () => {
    wretch
      .url(`/papelito/${code}`)
      .put({ id: playerId, papelito: papelitos[index].papelito, score: true })
      .res(nextIndex);
  };

  const onNo = nextIndex;

  return (
    <Modal className={styles.modal} isOpen={isOpen} onRequestClose={onClose}>
      <button onClick={onClose}>
        <i className="fas fa-times" />
      </button>

      <h2>{papelitos[index].papelito}</h2>
      <div>{toColon(time)}</div>
      <p>Guessed correctly?</p>
      <button onClick={onYes}>Yes</button>
      <button onClick={onNo}>No</button>
    </Modal>
  );
};

export default RoundModal;
