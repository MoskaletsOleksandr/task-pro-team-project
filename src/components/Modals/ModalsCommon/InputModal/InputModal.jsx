import ModalInput from "./ModalInput.styled";

const InputModal = ({ onChange, value, ...rest }) => {
  return <ModalInput onChange={onChange} value={value} {...rest} />;
};

export default InputModal;
