import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 0px 24px;
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

  cursor: pointer;
`;

export const SvgIconPlus = styled.svg`
  margin-right: 8px;
  width: 28px;
  height: 28px;
  stroke: var(--add-column-btn-plus-color);
  border-radius: 8px;
  background-color: var(--add-column-btn-plus-bg-color);
`;
