import{Formik,Form} from 'formik';
import *as Yup from 'yup';
import FormikController from './FormikController'; 
import { Button } from 'components/formik/SubmitBTN';


export function FormikContainer(){

    const checkboxOptions=[
        
        { key:'1', value:'1'},
        { key:'2', value:'2'},
        { key:'3', value:'3'},]


    
    const initialValues={
       email:'', 
       description:'',  
       checkboxOptions:[],  
    };
    const onSubmit=values=>{
        console.log(values)
        
    };
    const validationSchema=Yup.object({
        email:Yup.string().required('email is required').email('Invalid email address'),
        description:Yup.string().required('fill in description'),
        checkboxOptions:Yup.array(),
    })

    return(
<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {formik=><Form>
        <FormikController control='input' type='email' label='Email' name='email'/>
        <FormikController control='textarea' label='Description' name='description'/>
        <FormikController control='checkbox' label='checkbox topic' name='checkboxOptions' options={checkboxOptions}/>
        <Button>Submit </Button>
         </Form>}
</Formik>
    )

}

