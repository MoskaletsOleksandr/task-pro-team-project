import styled from '@emotion/styled';

const ModalText = styled.p`
  font-size: ${props => props.fontSize || '12px'};
  font-weight: ${props => props.fontWeight || '500'};
  line-height: ${props => props.lineHeight || '1.2'};
  margin-bottom: ${props => props.marginBottom || '4px'};
  color: ${props => props.color || 'var(--modal-secondary-text-color)'};
`;

export default ModalText;
