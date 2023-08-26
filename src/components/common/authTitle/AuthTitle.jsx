import React from 'react'
import PropTypes from 'prop-types';
import { AuthTitle,AuthSpan } from './AuthTitleStyled';

function FormTitle({active,inactive}) {
  return (
    <AuthTitle>{active}<AuthSpan>{inactive}</AuthSpan></AuthTitle>
  )
}

FormTitle.propTypes={
    active:PropTypes.string.isRequired,
    inactive:PropTypes.string.isRequired
}
export default FormTitle