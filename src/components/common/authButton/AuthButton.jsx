import PropTypes from 'prop-types';
import { AuthStyledButton } from './AuthButtonStyled';



export const AuthButton = ({ children, onClick }) => {

  return (
    <AuthStyledButton type="submit"onClick={onClick}>
      {children}
    </AuthStyledButton>
  );
};


AuthButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
 
};
