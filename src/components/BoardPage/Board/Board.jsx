// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentBoardForScreensPage } from '../../../fakeData/fakeData';
import Column from '../Column/Column';
import {
  DashboardContainer,
  ColumnWrapper,
  DashboardContent,
} from './Board.styled';

const Board = () => {
  const board = useSelector(state => state.boards.currentBoard);
  const forRender = board ? board : currentBoardForScreensPage;
  return (
    <DashboardContainer>
      <DashboardContent>
        {forRender.columns.map(column => (
          <ColumnWrapper key={column._id}>
            <Column title={column.title} tasks={column.tasks} />
          </ColumnWrapper>
        ))}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Board;
