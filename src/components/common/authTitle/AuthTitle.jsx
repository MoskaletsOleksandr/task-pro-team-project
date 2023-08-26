import React from 'react'
import PropTypes from 'prop-types';
import { AuthTitle,AuthSpan } from './AuthTitleStyled';

function FormTitle({title,subtitle}) {
  return (
    <AuthTitle>{title}<AuthSpan>{subtitle}</AuthSpan></AuthTitle>
  )
}

FormTitle.propTypes={
    active:PropTypes.string.isRequired,
    inactive:PropTypes.string.isRequired
}
export default FormTitle