import { ModalSvgPlus } from '../Modals.styled';

const SvgPlusModal = ({ children, ...rest }) => {
  return <ModalSvgPlus {...rest}>{children}</ModalSvgPlus>;
};

export default SvgPlusModal;
