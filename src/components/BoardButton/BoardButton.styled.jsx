import styled from '@emotion/styled';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
  opacity: 0.4;
  scroll-snap-align: start;
  opacity: 0.4;

  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }

  &.active {
    background-color: var(--sidebar-active-board-bg-color);
    opacity: 1;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-left: 4px solid var(--sidebar-border-left-color);
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }
  }
`;

export const Svg = styled.svg`
  fill: var(--sidebar-active-board-text-color);
`;

export const Title = styled.p`
  margin-left: 4px;
  margin-right: auto;
  color: var(--sidebar-active-board-text-color);
  font-size: 14;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const ActiveSvg = styled.svg`
  fill: var(--sidebar-inactive-board-text-color);
  transition: scale 250ms ease-in 0s, stroke 250ms ease-in 0s;
  &:hover,
  &:focus {
    border: 1.5px solid #BEDBB0;
    fill: #BEDBB0;
    scale: 1.08;
  }
`;

export const IconButton = styled.button`
  display: block;
  height: 16px;
  background-color: transparent;
  border: none;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;