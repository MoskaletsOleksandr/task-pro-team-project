import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBoardButton from 'components/AddBoardButton';
import { Title } from './BoardList.styled';
import {
  getAllBoardsThunk,
  getCurrentBoardThunk,
} from 'redux/dashboards/thunks';
import { useNavigate, useParams } from 'react-router-dom';

function BoardList() {
  const { boardName } = useParams();
  console.log(boardName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boards = useSelector(state => state.boards.boards);

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  const handleOpenBoard = (id, title) => {
    console.log('id:', id);
    dispatch(getCurrentBoardThunk(id));

    const normalizedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(normalizedTitle);
  };
  return (
    <>
      <Title>My boards</Title>
      <AddBoardButton />
      {boards.map(({ _id, title }) => {
        return (
          <button
            key={_id}
            onClick={() => {
              handleOpenBoard(_id, title);
            }}
          >
            {title}
          </button>
        );
      })}
    </>
  );
}

export default BoardList;
