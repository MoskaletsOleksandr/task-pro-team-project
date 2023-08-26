import styled from '@emotion/styled';
import FilteredPropsInputField from './FilteredPropsInput';

export const RegistrationFormStyled=styled.div`
width: 424px;
padding:40px;
background-color:#161616;
font-size:14px;
border: solid 1px black;
border-radius: 8px;
position:'relative'

`
export const AuthLabelSyled=styled.label`
display:block;
color:white;
fill:white;
width: 100%;


`
export const Input = styled(FilteredPropsInputField)`
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 30%);
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
  color:white;
  `

 