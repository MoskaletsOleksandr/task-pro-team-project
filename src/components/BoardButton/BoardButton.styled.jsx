import styled from '@emotion/styled';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 14px;
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
      border-left: 4px solid #BEDBB0;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      scroll-snap-align: start;
    }
  }
`;

export const Svg = styled.svg`
  stroke: var(--sidebar-active-board-text-color);
  fill: transparent;
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
  stroke: var(--sidebar-inactive-board-text-color);
  fill: transparent;
  transition: scale 250ms ease-in 0s, stroke 250ms ease-in 0s;
  &:hover,
  &:focus {
    stroke: #BEDBB0;
    scale: 1.08;
  }
`;

export const IconButton = styled.button`
  display: block;
  height: 16px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;