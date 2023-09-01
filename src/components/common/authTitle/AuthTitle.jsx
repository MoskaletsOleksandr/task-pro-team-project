import React from 'react'

import { AuthTitle,StyledLink} from './AuthTitleStyled';


function FormTitle() {

  return (
    <AuthTitle >
      <StyledLink to='/auth/register' >Registration</StyledLink>
      <StyledLink to='/auth/login'> Log In</StyledLink>
      </AuthTitle>
  )
}


export default FormTitle