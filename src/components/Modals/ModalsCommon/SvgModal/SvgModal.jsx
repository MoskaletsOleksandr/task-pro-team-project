import PropTypes from 'prop-types';
import ModalSvg from './ModalSvg';

const SvgModal = ({ children, ...rest }) => {
  return <ModalSvg {...rest}>{children}</ModalSvg>;
};

SvgModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SvgModal;
