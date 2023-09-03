import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddBoardButton from 'components/AddBoardButton';
import { Title } from './BoardList.styled';
import {
  // deleteBoardByIdThunk,
  getAllBoardsThunk,
  // getCurrentBoardThunk,
} from 'redux/dashboards/thunks';
// import { useAllBoards } from 'components/hooks';
// import { useNavigate } from 'react-router-dom';
import ButtonList from 'components/ButtonList/ButtonList';

// import EditBoardForm from 'components/EditBoardForm/EditBoardForm';
// import Modal from 'components/Modal/Modal';

function BoardList() {
  // const allBoards = useAllBoards();
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  // const boards = useSelector(state => state.boards.boards);

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  // const handleOpenBoard = (id, title) => {
  //   dispatch(getCurrentBoardThunk(id));

  //   const normalizedTitle = title.toLowerCase().replace(/\s+/g, '-');
  //   navigate(normalizedTitle);
  // };

  // const handleEditBoard = (e, boardId) => {
  //   e.stopPropagation();
  //   console.log('handleEditBoard'); // Зупиняє подальше поширення кліку до обгортки
  //   // Додайте код для редагування дошки з ID `boardId`
  // };

  // const handleDeleteBoard = (e, boardId) => {
  //   e.stopPropagation();
  //   dispatch(deleteBoardByIdThunk(boardId));
  // };

  return (
    <>
      <Title>My boards</Title>
      <AddBoardButton />
      {/* {boards.map(({ _id, title }) => (
        <div
          key={_id}
          onClick={() => handleOpenBoard(_id, title)}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <span style={{ color: 'white' }}>{title}</span>
          <div>
            <button onClick={e => handleEditBoard(e, _id)}>Edit</button>
            <button onClick={e => handleDeleteBoard(e, _id)}>Delete</button>
          </div>
        </div>
      ))} */}
      <ButtonList />
      {/* {boards.length !== 0 && <ButtonList />} */}
    </>
  );
}

export default BoardList;
