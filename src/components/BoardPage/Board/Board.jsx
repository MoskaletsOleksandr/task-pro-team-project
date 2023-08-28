import React from 'react';
import { currentBoardForScreensPage } from '../../../fakeData/fakeData';
import Column from '../Column/Column';
import { DashboardContainer, ColumnWrapper } from './Board.styled';

const MainDashboard = () => {
  return (
    <DashboardContainer>
      <div style={{ flexGrow: 1, display: 'flex' }}>
        {currentBoardForScreensPage.columns.map(column => (
          <ColumnWrapper key={column._id}>
            <Column title={column.title} tasks={column.tasks} />
          </ColumnWrapper>
        ))}
      </div>
    </DashboardContainer>
  );
};

export default MainDashboard;
