import styled from '@emotion/styled';
import FilteredPropsInputField from './FilteredPropsInput';

export const RegistrationFormStyled=styled.div`
width: 424px;
padding:40px;
background-color:'#151515';
font-size:14px;
border: solid 1px black;
position:'relative';

`
export const AuthLabelSyled=styled.label`

width: 100%;
`
export const Input = styled(FilteredPropsInputField)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
  position:'relative'`

  export const EyeSvg=styled.svg`
  fill:'black';
  stroke:'black';
 position:'absolute';
 top:0;

  `