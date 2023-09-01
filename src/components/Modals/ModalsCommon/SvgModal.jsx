import PropTypes from 'prop-types';
import { ModalSvg } from '../Modals.styled';

const SvgModal = ({ children, ...rest }) => {
  return <ModalSvg {...rest}>{children}</ModalSvg>;
};

SvgModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SvgModal;
