import styled from '@emotion/styled';

const ModalSvgPlus = styled.div`
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '28px'};
  height: ${props => props.height || '28px'};
  padding: ${props => props.padding || '7px'};
  background-color: ${props =>
    props.backgroundColor || 'var(--modal-plus-btn-bg-color)'};
  border-radius: ${props => props.borderRadius || '8px'};
  margin-right: ${props => props.marginRight || '8px'};
`;

export default ModalSvgPlus;