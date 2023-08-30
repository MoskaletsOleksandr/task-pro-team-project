// import React, { useEffect, useState } from 'react';
import { currentBoardForScreensPage } from '../../../fakeData/fakeData';
import Column from '../Column/Column';
import {
  DashboardContainer,
  ColumnWrapper,
  DashboardContent,
} from './Board.styled';

const Board = () => {
  return (
    <DashboardContainer>
      <DashboardContent>
        {currentBoardForScreensPage.columns.map(column => (
          <ColumnWrapper key={column._id}>
            <Column 
            title={column.title} 
            tasks={column.tasks} />
          </ColumnWrapper>
        ))}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Board;
