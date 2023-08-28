import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 0px 24px;
  width: 100vw;
`;
export const SectionTitle = styled.div`
  display: flex;
`;

export const BtnFilters = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 20px;
  margin-top: 14px;
  margin-left: auto;

  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--add-column-btn-text-color);

  border: none;
  background-color: var(--screens-page-bg-color);
  cursor: pointer;
`;

export const SectionBoards = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 12px;
    width: 100%;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--horizontal-scroll-slider-bg-color);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--horizontal-scroll-bar-bg-color);
    border-radius: 12px;
  }
`;

export const SvgIconFilters = styled.svg`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  stroke: var(--add-column-btn-text-color);
  fill: var(--screens-page-bg-color);
`;

export const Title = styled.h1`
  padding: 10px 0px;

  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--add-column-btn-text-color);
`;

export const BtnAddColumn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 335px;
  width: 335px;
  height: 56px;

  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--add-column-btn-text-color);

  border: none;
  border-radius: 8px;
  background: var(--add-column-btn-bg-color);

  transition-property: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  &:hover,
  :focus {
    background-color: var(--column-add-btn-bg-color-hover);
    transform: background-color;
  }
`;

export const WrapSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  content: '';
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: var(--add-column-btn-plus-bg-color);
`;

export const SvgIconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-column-btn-plus-color);
  background-color: var(--add-column-btn-plus-bg-color);
`;
