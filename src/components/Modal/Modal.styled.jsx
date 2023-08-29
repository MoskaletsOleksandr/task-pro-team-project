import styled from '@emotion/styled';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #15151530;
  overflow-y: auto;
  z-index: 100;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 24px;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: var(--modal-bg-color);
  box-shadow: 0px 4px 16px 0px var(--modal-window-shadow);
  color: var(--modal-title-color);

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: ${props => (props.custom ? '400px' : '350px')};
  }

  @media screen and (max-height: 500px) and (orientation: landscape) {
    position: sticky;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  &:hover,
  :focus {
    svg {
      stroke: var(--header-theme-select-text-color-hover);
      transition: stroke 0.3s ease;
    }
  }
`;

export const CloseSVG = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--modal-icon-color);
`;
