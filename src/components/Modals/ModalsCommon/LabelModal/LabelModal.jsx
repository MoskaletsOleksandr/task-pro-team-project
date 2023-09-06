import ModalLabel from './ModalLabel.styled';

const LabelModal = ({ children, ...rest }) => {
  return <ModalLabel {...rest}>{children}</ModalLabel>;
};

export default LabelModal;