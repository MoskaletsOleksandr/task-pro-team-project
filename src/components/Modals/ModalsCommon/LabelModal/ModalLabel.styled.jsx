import styled from '@emotion/styled';

const ModalLabel = styled.label`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  margin-bottom: ${props => props.marginBottom || '24px'};
  text-align: ${props => props.textAlign || 'center'};  
`;

export default ModalLabel;