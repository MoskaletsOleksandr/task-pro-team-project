import styled from '@emotion/styled';

export const ContainerSvg = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background-color: var(--modal-plus-btn-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  text-align: center;

  & + p {
    color: var(--modal-btn-text-color);
    letter-spacing: -0.28px;
  }
`;
export const Svg = styled.svg`
stroke: var(--modal-selected-plus-color);
`;
