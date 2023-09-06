import ModalButton from "./ModalButton.styled";


const ButtonModal = ({ onClick, name, children, type, ...rest }) => {
  return (
    <ModalButton onClick={onClick} name={name} type={type} {...rest}>
      {children}
    </ModalButton>
  );
};

export default ButtonModal;
