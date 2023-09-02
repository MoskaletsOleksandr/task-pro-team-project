import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import {
  DashboardContainer,
  ColumnWrapper,
  DashboardContent,
} from './Board.styled';

const Board = () => {
  const board = useSelector(state => state.boards.currentBoard);
  return (
    <DashboardContainer>
      <DashboardContent>
        {board.columns.map(column => (
          <ColumnWrapper key={column._id}>
            <Column
              title={column.title}
              tasks={column.tasks}
              columnId={column._id}
            />
          </ColumnWrapper>
        ))}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Board;
