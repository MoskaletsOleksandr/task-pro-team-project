import { LabelStyled } from 'components/common/Label/Label.styled';
import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError';

function FormikCheckbox(props) {
    const{label,name, options,...rest}=props;
  return (
    <div className="form-control">
        <LabelStyled>{label}
        <Field name={name} {...rest}>
            {({field})=>{
                return options.map(option=>{
                    return(
                        <React.Fragment key={option.key}><label>{option.key} <input type='checkbox'{...field} 
                        value={option.value} checked={field.value.includes(option.value)}/></label>
               
                        </React.Fragment> 
                    )
                })}}
           
        </Field>
        <ErrorMessage name={name} component={TextError}/>
        </LabelStyled>
    </div>
  )
}

export default FormikCheckbox