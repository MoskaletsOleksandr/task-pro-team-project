import styled from '@emotion/styled';

const ModalSvg = styled.svg`
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '18px'};
  stroke: ${props => props.stroke || 'var(--modal-selected-plus-color)'};
  cursor: pointer;
  &:hover,
  &:focus,
  &:checked {
    stroke: ${props => props.stroke || 'var(--modal-selected-plus-color)'};
  }
`;

export default ModalSvg;