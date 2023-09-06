import styled from '@emotion/styled';

 const ModalImg = styled.div`
  position: relative;
  width: ${props => props.width || '28px'};
  height: ${props => props.height || '28px'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  border: ${props =>
    props.border || '1px solid var(--modal-input-border-color)'};
  border-radius: ${props => props.borderRadius || '6px'};
  cursor: pointer; 
`;

export default ModalImg;