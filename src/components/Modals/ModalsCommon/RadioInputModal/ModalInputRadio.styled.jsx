import styled from '@emotion/styled';

export const ModalInputRadio = styled.input`
  position: ${props => props.position || 'absolute'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  /* z-index: ${props => props.zIndex || '-1'};
  opacity: ${props => props.opacity || '0'}; */
    
  &:checked {
    z-index: ${props => props.zIndex || '0'};
    opacity: ${props => props.opacity || '1'};
    accent-color: ${props => props.accentColor || 'var(--filter-medium-color)'};
  }
`;
