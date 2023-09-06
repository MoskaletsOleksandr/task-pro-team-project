import PropTypes from 'prop-types';
import ModalWrapperComponent from './ModalWrapperComponent.styled';

const WrapperComponentModal = ({ children, ...rest }) => {
  return <ModalWrapperComponent {...rest}>{children}</ModalWrapperComponent>;
};

WrapperComponentModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperComponentModal;
