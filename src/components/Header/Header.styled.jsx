import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  min-height: 68px;
  padding-right: 24px;
  color: var(--header-theme-select-text-color);
  background-color: var(--header-bg-color);

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 1439px) {
    padding-left: 20px;
    padding-right: 32px;
  }
`;

export const IconBM = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--header-name-color);

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomSelect = styled.div`
  position: relative;
`;

export const CustomOptionList = styled.ul`
  position: absolute;
  display: ${props => (props.open ? 'block' : 'none')};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px var(--header-theme-select-border-color);
  border-radius: 8px;
  background-color: var(--header-theme-select-bg-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`;

export const CustomOption = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--header-theme-select-text-color);

  &:hover {
    color: var(--header-theme-select-text-color-hover);
  }

  ${props =>
    props.selected &&
    `
      color: var(--header-theme-select-text-color-hover)
    `}
`;

export const TheamBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* &:hover {
    padding: 5px;
    box-shadow: 0px 6px 7px -5px #9dc888;
  } */
`;

export const IconDown = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--header-theme-select-text-color);
`;
