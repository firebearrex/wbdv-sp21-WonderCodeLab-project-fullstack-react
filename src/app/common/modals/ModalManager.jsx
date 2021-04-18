import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from '../../../components/map/TestModal';
import LoginForm from '../../../components/auth/LoginForm';
import RegisterForm from '../../../components/auth/RegisterForm';

export default function ModalManager() {
  const modalLookup = {
      TestModal,
      LoginForm,
      RegisterForm
  };
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
}
