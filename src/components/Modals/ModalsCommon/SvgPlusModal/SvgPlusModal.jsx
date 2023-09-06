import ModalSvgPlus from "./ModalSvgPlus.styled";

const SvgPlusModal = ({ children, ...rest }) => {
  return <ModalSvgPlus {...rest}>{children}</ModalSvgPlus>;
};

export default SvgPlusModal;
