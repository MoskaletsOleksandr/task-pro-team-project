import PropTypes from 'prop-types';
import { ModalWrapperComponent } from '../Modals.styled';

const WrapperComponentModal = ({ children, ...rest }) => {
  return <ModalWrapperComponent {...rest}>{children}</ModalWrapperComponent>;
};

WrapperComponentModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperComponentModal;
