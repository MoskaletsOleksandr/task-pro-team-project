import React from 'react';

import {
  Section,
  SectionTitle,
  BtnFilters,
  SvgIconFilters,
  BtnAddColumn,
  Title,
  SvgIconPlus,
} from './MainDashboard.styled';

import sprite from '../../images/sprite.svg';

const MainDashboard = () => {
  const handleFilters = e => {
    alert('Handel Button Filters');
  };

  const handleAddNewColumn = e => {
    alert('Handel Button Add New Column');
  };

  return (
    <Section>
      <SectionTitle>
        <Title>Project office</Title>

        <BtnFilters type="submit" onClick={handleFilters}>
          <SvgIconFilters>
            + <use href={sprite + '#icon-filter'}></use>
          </SvgIconFilters>
          Filter
        </BtnFilters>
      </SectionTitle>

      <BtnAddColumn type="submit" onClick={handleAddNewColumn}>
        <SvgIconPlus>
          + <use href={sprite + '#icon-plus'}></use>
        </SvgIconPlus>
        Add another column
      </BtnAddColumn>
    </Section>
  );
};

export default MainDashboard;
