import React from 'react';

import Modal from 'components/Modal';
import ModalTitle from 'components/ModalTitle';

const ModalEditProfile = ({ closeModal, isOpen }) => {
  return (
    <Modal onClose={closeModal} isOpen={isOpen}>
      <ModalTitle>Edit profile</ModalTitle>
    </Modal>
  );
};

export default ModalEditProfile;
