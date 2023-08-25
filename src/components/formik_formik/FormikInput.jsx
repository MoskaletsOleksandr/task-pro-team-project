import React from 'react';
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';
import { LabelStyled } from 'components/common/Label/Label.styled';

function FormikInput(props) {
    const{label,name, ...rest}=props;
  return (
    <div className="form-control">
        
        <LabelStyled>{label}
        <Field name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
        </LabelStyled>
    </div>
  )
}

export default FormikInput