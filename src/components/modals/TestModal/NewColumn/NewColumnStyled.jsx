import styled from "@emotion/styled";
import FilteredPropsInputField from "components/registrationForm/FilteredPropsInput";

export const FormWrapper=styled.div`
width:350px;
padding:24px;
// background-color:var(--modal-button-plus-bg-color);
background-color:#161616;
border-radius:8px;
position:relative;
`
export const FormTitle=styled.p`
// color:var(--modal-title-color);
font-size:18px;
font-weight:500;
line-height:27px;
margin-bottom:20px;

color:#ffffff;
`

export const LabelStyled= styled.label`

width: 100%;
display: flex;
align-items: center;
`;

export const InputStyled=styled(FilteredPropsInputField)`
background-color: #161616;
// background-color:var(--modal-input-bg-color);
// border: 1px solid var(--modal-input-border-color);
border: 1px solid #BEDBB0;
border-radius: 8px;
font-size: 1rem;
line-height: 1.5rem;
font-style: normal;
font-weight: 400;
width: 100%;
margin-bottom:20px;

padding: 0.75rem 0.75rem;
color: white;

&:-webkit-autofill {
  -webkit-box-shadow: rgb(22,22,22) 0px 0px 0px 50px inset;;
  -webkit-text-fill-color: rgb(255, 255, 255);
  -webkit-border-before-color:rgba(255, 255, 255, 30%);
  // -webkit-border-color:rgba(255, 255, 255, 30%);
  outline: transparent;

}

&:-webkit-autofill:focus {
  outline: transparent;
}
`

export const ButtonWrapper=styled.div`
display:flex;
align-items:center;
width:100%;
position:relative;
`;

export const StyledIconContainer=styled.div`
display:flex;
width:28px;
height:28px;
justify-content:center;
align-items:center;
position:absolute;
left:119px;
`

export const ButtonForm=styled.button`
height:49px;
width:100%;
font-size:14px;
border-radius: 8px;
padding-left:39px;
// background-color:var(--modal-btn-bg-color);
// color:var(--modal-btn-text-color);


background-color: #bedbb0;
color:#161616;
&:hover{
    background-color: #bedbb0;
    // background-color:var(--modal-btn-bg-color);
}
`

export const SvgPlus=styled.svg`

`

export const CrossStyledContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:28px;
height:28px;
position:absolute;
right:15px;
`