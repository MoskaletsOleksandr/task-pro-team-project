import PropTypes from 'prop-types';
import { ModalLabel } from '../Modals.styled';

const LabelModal = ({ children, ...rest }) => {
  return <ModalLabel {...rest}>{children}</ModalLabel>;
};

LabelModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LabelModal;
