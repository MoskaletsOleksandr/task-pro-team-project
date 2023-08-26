import React from 'react'
import styled from '@emotion/styled';

const ErrorStyle=styled.div`
color:white;


`
function AuthTextError(props) {
  return (
    <ErrorStyle>{props.children}</ErrorStyle>
  )
}

export default AuthTextError;