import React from 'react';

import { currentBoardForScreensPage } from '../../fakeData/fakeData';
import Column from '../../components/BoardPage/Column/Column';
import Board from '../../components/BoardPage/Board/Board';

import {
  Section,
  SectionTitle,
  BtnFilters,
  SvgIconFilters,
  BtnAddColumn,
  Title,
  SvgIconPlus,
  SectionBoards,
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

      {/* Boardes */}
      <SectionBoards>
        <Board>
          {currentBoardForScreensPage.columns.map(column => (
            <Column
              key={column._id}
              title={column.title}
              tasks={column.tasks}
            />
          ))}
        </Board>

        <BtnAddColumn type="submit" onClick={handleAddNewColumn}>
          <SvgIconPlus>
            + <use href={sprite + '#icon-plus'}></use>
          </SvgIconPlus>
          Add another column
        </BtnAddColumn>
      </SectionBoards>
    </Section>
  );
};

export default MainDashboard;
