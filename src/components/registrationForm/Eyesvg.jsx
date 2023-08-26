import React from 'react'
import {ReactComponent as EyeIcon} from '../../images/eye.svg'
import styled from '@emotion/styled';

const IconWrapper=styled.div`

position:absolute;
`

function Eyesvg() {
  return (
    <IconWrapper><EyeIcon width='20px' height='20px'/></IconWrapper>
  )
}

export default Eyesvg