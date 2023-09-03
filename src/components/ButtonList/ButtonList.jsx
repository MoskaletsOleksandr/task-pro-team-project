import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useAllBoards } from 'components/hooks';
import BoardButton from 'components/BoardButton/BoardButton';
import { List } from './ButtonList.styled';
import {
  getCurrentBoardThunk,
  getAllBoardsThunk,
} from 'redux/dashboards/thunks';
import { useNavigate } from 'react-router-dom';

function ButtonList() {
  // const allBoards = useAllBoards();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boards = useSelector(state => state.boards.boards);
  // const boardID = useBoardId();
  // const ref = useRef(null);
  // const { onMouseDown } = useDraggable(ref, { direction: 'vertical' });

  useEffect(() => {
    // if (allBoards.length !== 0 && boardID) {
    //   dispatch(getCurrentBoardThunk(boardID));
    // }
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  const handleOpenBoard = (id, title) => {
    dispatch(getCurrentBoardThunk(id));

    const normalizedTitle = title.toLowerCase().replace(/[\s/]+/g, '-');
    console.log('====================================');
    console.log('normalizedTitle:', normalizedTitle);
    console.log('====================================');

    navigate(normalizedTitle);
  };

  return (
    <>
      <List>
        {/* {boards.length !== 0 && */}
        {boards.map(({ _id, title, icon, active }) => (
          <BoardButton
            key={_id}
            name={title}
            onClick={() => handleOpenBoard(_id, title)}
            style={{ display: 'flex', justifyContent: 'space-between' }}
            id={_id}
            // icon={icon}
            // isActive={active}s
          />
        ))}
      </List>
    </>
  );
}

export default ButtonList;
