import styled from '@emotion/styled';

export const ContainerSvg = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: var(--modal-button-plus-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  & + p {
    color: var(--modal-btn-text-color);
    letter-spacing: -0.28px;
  }
`;
export const Svg = styled.svg`
  fill: var(--modal-selected-icon-color);
`;
