import { ModalButton } from '../Modals.styled';

const ButtonModal = ({ onClick, name, children, type, ...rest }) => {
  return (
    <ModalButton onClick={onClick} name={name} type={type} {...rest}>
      {children}
    </ModalButton>
  );
};

export default ButtonModal;
