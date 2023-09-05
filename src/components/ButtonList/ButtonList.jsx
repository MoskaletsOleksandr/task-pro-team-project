import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardButton from 'components/BoardButton/BoardButton';
import { List } from './ButtonList.styled';
import { getCurrentBoardThunk, getAllBoardsThunk } from 'redux/dashboards/thunks';
import { useNavigate } from 'react-router-dom';

function ButtonList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boards = useSelector(state => state.boards.boards);

  const [activeBoardId, setActiveBoardId] = useState(null);

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  const handleOpenBoard = (id, title) => {
    dispatch(getCurrentBoardThunk(id));
    const normalizedTitle = title.toLowerCase().replace(/[\s/]+/g, '-');
    navigate(normalizedTitle);
    setActiveBoardId(id); 
  };

  return (
    <>
      <List>
        {boards.map(({ _id, title, icon }) => (
          <BoardButton
            key={_id}
            name={title}
            onClick={() => handleOpenBoard(_id, title)}
            style={{ display: 'flex', justifyContent: 'space-between' }}
            id={_id}
            active={_id === activeBoardId} 
            icon={icon}
          />
        ))}
      </List>
    </>
  );
}

export default ButtonList;
