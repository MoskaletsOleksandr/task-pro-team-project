import React from 'react';
import NewDashboard from 'components/NewDashboard/NewDashboard';
import MainDashboard from 'components/MainDashboard/MainDashboard';
import { useSelector } from 'react-redux';

// import { currentBoardForScreensPage } from '../../fakeData/fakeData';
// import Column from '../../components/BoardPage/Column/Column';
// import Board from '../../components/BoardPage/Board/Board';

const ScreenPage = () => {
  const currentBoard = useSelector(state => state.boards.currentBoard);
  // const isVisibleMainDashboard = true;
  return (
    <div>
      {currentBoard ? <MainDashboard /> : <NewDashboard />}
      {/* <Board>
        {currentBoardForScreensPage.columns.map(column => (
          <Column key={column._id} title={column.title} tasks={column.tasks} />
        ))}
      </Board> */}
    </div>
  );
};

export default ScreenPage;
