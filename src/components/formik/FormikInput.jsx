import PropTypes from 'prop-types';
import { InputStyled } from '../common/Input/Input.styled';

export const Input = ({
  value,
  onChange,
 
  name,
  onBlur,
  
  
}) => {
  return (
    <InputStyled
      onChange={onChange}
      value={value}
     
      name={name}
      onBlur={onBlur}
    ></InputStyled>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
 
  name: PropTypes.string.isRequired,
  onBlur:PropTypes.func.isRequired,

};
