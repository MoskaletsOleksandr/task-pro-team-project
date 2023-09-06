import styled from "@emotion/styled";

export const ModalTitle = styled.p`
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => props.fontWeight || '500'};
  line-height: ${props => props.lineHeight || '1.2'};
  margin-bottom: ${props => props.marginBottom || '24px'};
  color: ${props => props.color || 'var(--modal-title-color)'};  
`;

export default ModalTitle;