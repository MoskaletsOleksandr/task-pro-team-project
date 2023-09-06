import styled from '@emotion/styled';

const ModalButton = styled.button`
  position: ${props => props.position || 'static'};
  top: ${props => props.top || '0px'};
  right: ${props => props.right || '0px'};
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '49px'};
  padding: ${props => props.padding || '10px 0px'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '8px'};
  font-family: 'Poppins', sans-serif;
  font-weight: ${props => props.fontWeight || '500'};
  font-size: ${props => props.fontSize || '14px'};
  line-height: ${props => props.lineHeight || '1.2'};
  background-color: ${props =>
    props.backgroundColor || 'var(--modal-btn-bg-color)'};
  color: ${props => props.color || 'var(--modal-btn-text-color)'};
  margin-top: ${props => props.marginTop || '0px'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover,
  &:focus {
    background-color: ${props =>
      props.backgroundColorHover || 'var(--modal-btn-bg-color-hover)'};
    outline: none;
  }
`;

export default ModalButton;