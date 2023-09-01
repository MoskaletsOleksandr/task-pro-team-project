import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDraggable } from "react-use-draggable-scroll";
// import { useAllBoards, useBoardId } from 'components/hooks';
import BoardButton from 'components/BoardButton/BoardButton';
import { List } from './ButtonList.styled';
import { getCurrentBoardThunk } from 'redux/dashboards/thunks';

function ButtonList() {
  // const allBoards = useAllBoards();
  const dispatch = useDispatch();
  // const boardID = useBoardId();
  const ref = useRef(null);
  const { onMouseDown } = useDraggable(ref, { direction: 'vertical' });

  // useEffect(() => {
  //   if (allBoards.length !== 0 && boardID) {
  //     dispatch(getCurrentBoardThunk(boardID));
  //   }
  // }, [allBoards, boardID, dispatch]);

  return (
    <>
      <List ref={ref} onMouseDown={onMouseDown}>
        {/* {allBoards.length !== 0 &&
          allBoards.map(({ _id, title, icon, active }) => ( */}
            <BoardButton
              // key={_id}
              // name={title}
              // id={_id}
              // icon={icon}
              // isActive={active}
            />
          {/* ))} */}
      </List>
    </>
  );
}

export default ButtonList;