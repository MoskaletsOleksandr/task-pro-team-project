import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddBoardButton from 'components/AddBoardButton';
import { Title } from './BoardList.styled';
import { getAllBoardsThunk } from 'redux/dashboards/thunks';


function BoardList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  return (
    <>
      <Title>My boards</Title>
      <AddBoardButton />
    </>
  );
}

export default BoardList;