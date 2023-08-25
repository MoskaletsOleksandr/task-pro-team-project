import PropTypes from 'prop-types';
import { ButtonStyled } from '../common/Button/Button.styled'

export const Button = ({ children }) => {
  return (
    <ButtonStyled >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
};
