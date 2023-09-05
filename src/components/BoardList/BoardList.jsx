import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddBoardButton from 'components/AddBoardButton';
import { Title } from './BoardList.styled';
import {
  getAllBoardsThunk,
} from 'redux/dashboards/thunks';
import ButtonList from 'components/ButtonList/ButtonList';

function BoardList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  return (
    <>
      <Title>My boards</Title>
      <AddBoardButton />
      <ButtonList />
    </>
  );
}

export default BoardList;
