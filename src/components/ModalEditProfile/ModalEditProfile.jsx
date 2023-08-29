import React from 'react';

import Modal from 'components/Modal';
import ModalTitle from 'components/ModalTitle';
import EditUser from 'components/EditUser';

const ModalEditProfile = ({ closeModal, isOpen }) => {
  return (
    <Modal onClose={closeModal} isOpen={isOpen} custom={true}>
      <ModalTitle>Edit profile</ModalTitle>
      <EditUser onClose={closeModal} />
    </Modal>
  );
};

export default ModalEditProfile;
