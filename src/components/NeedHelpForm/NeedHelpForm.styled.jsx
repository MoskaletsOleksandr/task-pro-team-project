import styled from '@emotion/styled';

export const Form = styled.form`
width: 287px;
color: var(--modal-bg-color);
@media screen and (min-width: 768px) {
width: 352px;
}
`;

export const Title = styled.h3`
font-size: 18px;
font-weight: 500;
color: var(--modal-title-color);
margin-bottom: 24px;

`;

export const Input = styled.input`
font-size: 14px;
width: 100%;
height: 49px;
padding: 14px 18px;
background-color: transparent;
border: 1px solid var(--modal-input-border-color);
color: var(--modal-primary-text-color);
border-radius: 8px;
opacity: 0.4;
margin-bottom: 4px;
&:focus {
  outline: none;
  opacity: 1;
}
`;

export const Textarea = styled.textarea`
font-size: 14px;
width: 100%;
padding: 14px 18px;
background-color: transparent;
border: 1px solid var(--modal-input-border-color);
border-radius: 8px;
color: var(--modal-primary-text-color);
opacity: 0.4;
min-height: 120px;
margin-bottom: 15px;

&:focus {
  outline: none;
  opacity: 1;
}
`;

export const ErrorMessage = styled.p`
color: var(--modal-btn-text-color);
margin-bottom: 10px;
text-align: center;
`;
