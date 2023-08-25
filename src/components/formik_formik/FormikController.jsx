import React from 'react'
import FormikInput from './FormikInput';
import Textarea from './Textarea';
import FormikCheckbox from './FormikCheckbox';

function FormikController(props) {
    const {control, ...rest}=props;
    switch(control){
        case 'input':return <FormikInput {...rest}/>
            case 'checkbox':return <FormikCheckbox {...rest}/>
             case 'radio':
                    case 'textarea':return <Textarea {...rest}/>
                        default:return null;
    }

}

export default FormikController