import React from 'react';
import sprite from '../../images/sprite.svg';

import { currentBoardForScreensPage } from '../../fakeData/fakeData';
import Column from '../../components/BoardPage/Column/Column';
import Board from '../../components/BoardPage/Board/Board';
// import AddNewCard from 'components/BoardPage/AddNewCardBtn/AddNewCardBtn';
import {
  Section,
  SectionTitle,
  BtnFilters,
  SvgIconFilters,
  BtnAddColumn,
  Title,
  SvgIconPlus,
  SectionBoards,
  WrapSvg,
} from './MainDashboard.styled';

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
            <use href={sprite + '#icon-filter'}></use>
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
          <WrapSvg>
            <SvgIconPlus>
              <use href={sprite + '#icon-plus'}></use>
            </SvgIconPlus>
          </WrapSvg>
          Add another column
        </BtnAddColumn>
      </SectionBoards>
    </Section>
  );
};

export default MainDashboard;
