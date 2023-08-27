import React from 'react';
import { currentBoardForScreensPage } from '../../fakeData/fakeData';
import Column from '../../components/BoardPage/Column/Column';
import Board from '../../components/BoardPage/Board/Board';


const ScreenPage = () => {
  return (
    <div>
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

