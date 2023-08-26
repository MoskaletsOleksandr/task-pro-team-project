import React from 'react'
import PropTypes from 'prop-types';
import { AuthTitle,AuthSpan } from './AuthTitleStyled';

function FormTitle({title,subtitle,name}) {

  return (
    <AuthTitle name={name}>{title}<AuthSpan name={name}>{subtitle}</AuthSpan></AuthTitle>
  )
}

FormTitle.propTypes={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    
}
export default FormTitle