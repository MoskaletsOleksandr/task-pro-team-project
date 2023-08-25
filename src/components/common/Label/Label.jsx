import PropTypes from 'prop-types';
import { LabelStyled } from './Label.styled';

export const Label = ({ children,label }) => {
  return <LabelStyled>{label}{children}</LabelStyled>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};
