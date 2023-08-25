import React from 'react'
import { LabelStyled } from 'components/common/Label/Label.styled';
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';

function Select(props) {
    const{label,name, options,...rest}=props;
  return (
    <div className="form-control">
    <LabelStyled>{label}
    <Field as='select' name={name} {...rest}>
        { options.map(option=>{
                return(
                    <option key={option.value} value={option.value}>{option.key}</option>
                    
                )
            })}
       
    </Field>
    <ErrorMessage name={name} component={TextError}/>
    </LabelStyled>
</div>
  )
}

export default Select