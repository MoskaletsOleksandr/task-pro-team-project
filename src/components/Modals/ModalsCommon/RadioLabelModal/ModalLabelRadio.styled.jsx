import styled from '@emotion/styled';

export const ModalLabelRadio = styled.label`
  position: ${props => props.position || 'relative'};
  display: ${props => props.display || 'flex'};  
  flex-direction: ${props => props.flexDirection || 'column'};

  &::before {
    content: '';
    width: ${props => props.width || '14px'};
    height: ${props => props.height || '14px'};
    display: ${props => props.display || 'nline-block'}i;
    border-radius: ${props => props.borderRadius || '50%'};
    background-color: ${props => props.backgroundColor || 'red'};
    border: ${props => props.border || 'none'};    
  }
`;
