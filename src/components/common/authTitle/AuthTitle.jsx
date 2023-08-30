import React from 'react'
import PropTypes from 'prop-types';
import { AuthTitle,StyledLink} from './AuthTitleStyled';


function FormTitle() {

  return (
    <AuthTitle >
      <StyledLink to='/auth/register' >Registration</StyledLink>
      <StyledLink to='/auth/login'> Log In</StyledLink>
      </AuthTitle>
  )
}

FormTitle.propTypes={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    
}
export default FormTitle