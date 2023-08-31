import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddBoardButton from 'components/AddBoardButton';
import { Title } from './BoardList.styled';
import { getAllBoardsThunk } from 'redux/dashboards/thunks';
// import { useAllBoards } from 'components/hooks';
import ButtonList from 'components/ButtonList/ButtonList';
// import { getBackgrounds } from 'redux/thunks';

function BoardList() {
  // const allBoards = useAllBoards();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBoardsThunk());
    // dispatch(getBackgrounds());
  }, [dispatch]);

  return (
    <>
      <Title>My boards</Title>
      <AddBoardButton />
      <ButtonList />
      {/* {allBoards.length !== 0 && <ButtonList />} */}
    </>
  );
}

export default BoardList;