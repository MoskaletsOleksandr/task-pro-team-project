import React from 'react';
import {Form,Formik} from 'formik';


import sprite from '../../../../images/sprite.svg';
import { FormWrapper,FormTitle,InputStyled, LabelStyled,ButtonWrapper,StyledIconContainer,ButtonForm,SvgPlus,CrossStyledContainer} from './NewColumnStyled';


function NewColumn({active,onClose}) {
    
    const initialValues={
        title:''
    }

    const onSubmit=(values,{resetForm})=>{
        console.log(values)
        // dispatch()
        resetForm();
    }

    const handleClick=()=>{
        onClose()
    }
  return (
    <FormWrapper>
        <CrossStyledContainer onClick={handleClick}><SvgPlus width='28' height="28"><use  href={sprite+'#icon-x-close'} ></use></SvgPlus></CrossStyledContainer>


        <FormTitle>{active?'Add column':'Edit column'}</FormTitle>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>{formik=>(<Form>
        <LabelStyled>
        <InputStyled name="title" placeholder="title"/>
        </LabelStyled>
        
         
         <ButtonWrapper>
            <StyledIconContainer> <SvgPlus width="28" height="28"><use href={sprite+'#icon-plus'}></use></SvgPlus></StyledIconContainer>
            <ButtonForm type="submit"> {active?'Add':'Edit'}
         </ButtonForm>
         

         </ButtonWrapper>

        </Form>)}
        </Formik>
      
        
    </FormWrapper>
  )
}

export default NewColumn