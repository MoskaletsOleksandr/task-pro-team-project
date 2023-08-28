import React from 'react';
import NewDashboard from 'components/NewDashboard/NewDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';
  
import { currentBoardForScreensPage } from '../../fakeData/fakeData';
import Column from '../../components/BoardPage/Column/Column';
import Board from '../../components/BoardPage/Board/Board';


const ScreenPage = () => {
  const isVisibleMainDashboard = true;
  return (
    <div>
    // isVisibleMainDashboard ? <MainDashboard /> : <NewDashboard />;
      <Board>
        {currentBoardForScreensPage.columns.map(column => (
          <Column
            key={column._id}
            title={column.title}
            tasks={column.tasks}
          />
        ))}
      </Board>
    </div>
  );
};


export default ScreenPage;

