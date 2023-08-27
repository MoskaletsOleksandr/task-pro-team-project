import styled from '@emotion/styled';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  min-height: 68px;
  padding-right: 24px;
  color: #ffffff;
  background-color: #161616;

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
  stroke: #121212;

  @media (min-width: 1440px) {
    display: none;
  }

  &:hover {
    box-shadow: 0px 6px 7px 1px #9dc888;
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
  /* display: ${props => (props.open ? 'block' : 'none')}; */
  display: block;
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px #bedbb0;
  border-radius: 8px;
  background-color: #161616;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`;

export const CustomOption = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: #bedbb0;
  }

  /* ${props =>
    props.selected &&
    `
      color: #bedbb0;
    `} */
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
  stroke: #ffffff;
`;
