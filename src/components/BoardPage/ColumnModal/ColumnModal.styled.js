import styled from '@emotion/styled';

const Input = styled.input`
display: flex;
width: 302px;
// hight:50px;
margin-top: 24px;
margin-bottom: 24px;
padding: 14px 18px 14px;
align-items: center;
border-radius: 8px;
border: 1px solid var(--modal-input-border-color);
opacity: 0.4;
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
background-color: var(--modal-bg-color);
color: var(--modal-input-text-color);
::placeholder {
  color: var(--modal-input-placeholder-color);
}
&:hover, &:focus {
  outline: none;
  border-color: var(--modal-input-border-color);
  opacity: 1;
}
`;


const BtnAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 302px;
  height: 49px;

  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--modal-btn-text-color);

  border: none;
  border-radius: 8px;
  background: var(--modal-btn-bg-color);

  transition-property: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  &:hover,
  :focus {
    background-color: var(--modal-btn-bg-color-hover);
    transform: background-color;
  }
`;

 const WrapSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  content: '';
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: var(--modal-plus-btn-bg-color);
`;

 const SvgIconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--modal-selected-plus-color);
//   background-color: var(--modal-plus-btn-bg-color);
`;

export {
    Input,
    BtnAdd,
    WrapSvg,
    SvgIconPlus
}