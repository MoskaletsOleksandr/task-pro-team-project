import Modal from 'components/Modal';

export const TestModal = ({ closeModal, isOpen }) => {
  return (
    <Modal onClose={closeModal} isOpen={isOpen}>
      <p>Test Modal</p>
    </Modal>
  );
};
