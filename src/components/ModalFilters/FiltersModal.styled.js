import styled from '@emotion/styled';

export const FiltersContainer = styled.div`
  padding: 24px;
  width: 300px;
  height: 234px;
`;

export const FiltersTitle = styled.h2`
  padding-bottom: 14px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.24px;
  /* letter-spacing: -0.02em; */
  color: var(--modal-title-color);
  border-bottom: 1px solid var(--modal-title-border-color);
`;

export const WraperAllColor = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 14px;

  color: var(--modal-title-color);
`;
export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 14px;
`;

export const FilterItem = styled.li`
  color: var(--modal-title-color);

  &:nth-of-type(1) {
    accent-color: var(--filter-without-priority-color);
  }
  &:nth-of-type(2) {
    accent-color: var(--filter-low-color);
  }
  &:nth-of-type(3) {
    accent-color: var(--filter-medium-color);
  }
  &:nth-of-type(4) {
    accent-color: var(--filter-high-color);
  }
`;

export const PriorityLabel = styled.label`
  display: flex;
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  letter-spacing: -0.24px;
  color: var(--filter-popup-tertiary-text-color);
`;

export const AllColor = styled.p`
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--modal-title-color);
`;

export const AllLabels = styled.label`
  display: flex;

  margin-left: auto;

  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: var(--filter-popup-tertiary-text-color);
`;

export const InputRadioBtn = styled.input`
  transform: scale(1.6);
  margin-right: 8px;
`;
