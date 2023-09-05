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
  stroke: var(--icon-stroke);
  fill:var(--sidebar-active-board-bg-color);
  opacity:1;
`;

export const Title = styled.p`
  margin-right: auto;
  text-transform: capitalize;
  color: var(--sidebar-active-board-text-color);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`;

export const ActiveSvg = styled.svg`
  stroke: var(--sidebar-inactive-icon-color);
  fill:var(--sidebar-active-board-bg-color);
  &:hover,
  &:focus {
     stroke: var(--progress-popup-text-color-hover);
     cursor:pointer;
  }
`;

export const IconButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items:center;
  gap: 8px;
`;