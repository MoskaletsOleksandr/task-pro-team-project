import styled from '@emotion/styled';

const ModalInput = styled.input`
  display: ${props => props.display || 'flex'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '287px'};
  height: ${props => props.height || '49px'};
  border: ${props =>
    props.border || '1px solid var(--modal-input-border-color)'};
  border-radius: ${props => props.borderRadius || '8px'};
  padding-top: ${props => props.padding || '14px'};
  padding-right: ${props => props.padding || '18px'};
  padding-bottom: ${props => props.padding || '14px'};
  padding-left: ${props => props.padding || '18px'};
  font-size: ${props => props.fontSize || '14px'};
  line-height: ${props => props.lineHeight || '1.2'};
  background-color: ${props =>
    props.backgroundColor || 'var(--modal-input-bg-color)'};
  color: ${props => props.color || 'var(--modal-input-text-color)'};
  outline: transparent;
  opacity: 0.4;
  transition: opacity var(--timing-function);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  cursor: text;
  
  &:hover,
  &:focus {
    border-color: var(--modal-input-border-color);
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    max-width: ${props => props.maxWidth || '302px'};
  }
`;

export default ModalInput;