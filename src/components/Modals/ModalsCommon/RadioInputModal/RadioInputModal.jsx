import { ModalInputRadio } from "./ModalInputRadio.styled";


const RadioInputModal = ({ onChange, value, ...rest }) => {
    return <ModalInputRadio onChange={onChange} value={value} {...rest}/>;
  };
  
  export default RadioInputModal;