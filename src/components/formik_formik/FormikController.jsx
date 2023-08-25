import React from 'react'
import FormikInput from './FormikInput';
import Textarea from './Textarea';
import FormikCheckbox from './FormikCheckbox';
import FormikRadio from './FormikRadio';
import Select from './Select';

function FormikController(props) {
    const {control, ...rest}=props;
    switch(control){
        case 'input':return <FormikInput {...rest}/>
            case 'checkbox':return <FormikCheckbox {...rest}/>
             case 'radio':return <FormikRadio {...rest}/>
                 case 'textarea':return <Textarea {...rest}/>
                    case 'select':return <Select {...rest}/>
                        default:return null;
    }

}

export default FormikController