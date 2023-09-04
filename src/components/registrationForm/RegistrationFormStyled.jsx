import styled from '@emotion/styled';
import FilteredPropsInputField from './FilteredPropsInput';

export const RegistrationFormStyled = styled.div`
  width: 424px;
  padding: 40px;
  background-color: #161616;
  font-size: 14px;
  border: solid 1px black;
  border-radius: 8px;

  @media screen and (max-width: 767px) {
  width: 335px;
  padding: 24px;
  }
`;
export const AuthLabelStyled = styled.label`
  
  width: 100%;
  display: flex;
  align-items: center;
`;
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
`;
