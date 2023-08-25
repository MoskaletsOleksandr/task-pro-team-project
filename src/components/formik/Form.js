import { useFormik } from "formik";

import *as Yup from 'yup';
import { Button } from "./SubmitBTN";
import { Input } from "./FormikInput";
import { Label } from "components/common/Label";


export const MainForm=()=>{
   
    const formik=useFormik({
        initialValues:{
            email:'',
            
        },
        onSubmit:values=>{
            console.log(values)
            
        },
        validationSchema:Yup.object({
            email:Yup.string().required('email is required').email('Invalid email address')
        })
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Label>
                    <Input name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                 
                </Label>
                
                <Button >Submit</Button>
                <div>{formik.errors.email&&formik.touched.email&&formik.errors.email}</div>
            </form>
        </div>
    )
}

// export const TestForm=()=>{
//     return(
//         <MainForm>
//          <Button type="submit">Submit</Button>
//         </MainForm>
//     )
// }