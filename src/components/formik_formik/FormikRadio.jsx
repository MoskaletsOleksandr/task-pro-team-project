import React from 'react'
import { LabelStyled } from 'components/common/Label/Label.styled';
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';

function FormikRadio(props) {
    const{label,name, options,...rest}=props;
  return (
    <div className="form-control">
    <LabelStyled>{label}
    <Field name={name} {...rest}>
        {({field})=>{
            return options.map(option=>{
                return(
                    <React.Fragment key={option.key}><label>{option.key} <input type='radio'{...field} 
                    value={option.value} checked={field.value===option.value}/></label>
           
                    </React.Fragment> 
                )
            })}}
       
    </Field>
    <ErrorMessage name={name} component={TextError}/>
    </LabelStyled>
</div>
  )
}

export default FormikRadio