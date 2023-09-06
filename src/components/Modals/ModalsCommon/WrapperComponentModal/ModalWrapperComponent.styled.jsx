import styled from '@emotion/styled';

const ModalWrapperComponent = styled.div`
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '8px'};
  max-width: ${props => props.maxWidth || '100%'};
  margin-bottom: ${props => props.marginBottom || '24px'};
`;

export default ModalWrapperComponent;