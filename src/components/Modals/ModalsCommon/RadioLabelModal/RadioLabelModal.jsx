import { ModalLabelRadio } from "./ModalLabelRadio.styled";

const RadioLabelModal = ({ children, ...rest }) => {
    return <ModalLabelRadio {...rest}>{children}</ModalLabelRadio>;
  };
  
  export default RadioLabelModal;