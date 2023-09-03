import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import {
  PriorityCircle,
  TruncatedText,
  CustomCard,
  CardContentWrapper,
  TitleTypography,
  PriorityTypography,
  DeadlineTypography,
  PriorityWrapper,
  DedlineWrapper,
  PriorityDateContainer,
  PriorityDateItem,
  WhiteIcon,
  Icons,
  BottomInfo,
  DeadlineInfo,
  PriorityInfo,
  PopUpMenu,
  BackDropHiden,
  BellIcon,
  ScrollContent
} from '../Card/Card.styled';
import CustomPopUpItem from '../PopUp/PopUp';
import sprite from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { updateTasksColumnByIdThunk, deleteTaskByIdThunk } from 'redux/dashboards/thunks';
import dayjs from 'dayjs';

const TaskCard = ({ task, columnId, togglePopUpMenu, isPopupOpen, idTask }) => {
  const dispatch = useDispatch();
  const columns = useSelector(state => state.boards.currentBoard.columns);
  const columnsLength = useSelector(state => state.boards.currentBoard.columns.length);

  const selectedTask = task;
  if (!selectedTask) {
    return null;
  }

  let priorityBorderColor;
  let priorityCircleColor;

  if (selectedTask.priority === 'low') {
    priorityCircleColor = 'var(--filter-low-color)';
    priorityBorderColor = 'var(--filter-low-color)';
  } else if (selectedTask.priority === 'medium') {
    priorityCircleColor = 'var(--filter-medium-color)';
    priorityBorderColor = 'var(--filter-medium-color)';
  } else if (selectedTask.priority === 'high') {
    priorityCircleColor = 'var(--filter-high-color)';
    priorityBorderColor = 'var(--filter-high-color)';
  } else {
    priorityCircleColor = 'var(--filter-without-priority-color)';
    priorityBorderColor = 'var(--filter-without-priority-color)';
  }

  // #c3c3c3

  const today = new Date().toLocaleDateString('en-GB');
  const formattedSelectedDeadline = dayjs(selectedTask.deadline).format(
    'DD/MM/YYYY'
  );
  const isTodayDeadline = formattedSelectedDeadline === today;

  console.log('today:', today);
  console.log('formattedSelectedDeadline:', formattedSelectedDeadline);
  console.log('isTodayDeadline:', isTodayDeadline);


  const listForPopup = columns.filter(column => column._id !== columnId);
  console.log('listForPopup: ', listForPopup);
  console.log(columnsLength);
  const handleMoveTask = columnId => {
    console.log('handleRemoveTask to', columnId);
    dispatch(
      updateTasksColumnByIdThunk({
        idTask: task._id,
        body: { newColumnId: columnId },
      })
    );
  };

  const handleDeleteCard = () => {
    dispatch(deleteTaskByIdThunk(idTask))
      .unwrap()
      .then((data) => {
        console.log('Task deleted successfully:', data);
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <CustomCard borderColor={priorityBorderColor}>
      <CardContentWrapper>
        <TitleTypography>{selectedTask.title}</TitleTypography>
        <TruncatedText>
          <LinesEllipsis
            text={selectedTask.text}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="words"
          />
        </TruncatedText>
        <BottomInfo>
          <PriorityDateContainer>
            <PriorityDateItem>
              <PriorityTypography>Priority:</PriorityTypography>
              <PriorityWrapper>
                <PriorityCircle
                  style={{ backgroundColor: priorityCircleColor }}
                />
                <PriorityInfo>{selectedTask.priority}</PriorityInfo>
              </PriorityWrapper>
            </PriorityDateItem>
            <DedlineWrapper>
              <DeadlineTypography>Deadline:</DeadlineTypography>
              <DeadlineInfo>{formattedSelectedDeadline}</DeadlineInfo>
            </DedlineWrapper>
          </PriorityDateContainer>
          <Icons>
            {isTodayDeadline && (
              <BellIcon className="icon-search">
                <use href={sprite + '#icon-bell'} style={{ color: 'yellow' }} />
              </BellIcon>
            )}
            {columnsLength > 1 && (
              <WhiteIcon
                className="icon-search"
                onClick={() => {
                  togglePopUpMenu(task._id);
                }}
              >
                <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
              </WhiteIcon>
            )}
            <WhiteIcon className="icon-search">
              <use href={sprite + '#icon-pencil-01'}></use>
            </WhiteIcon>
            <WhiteIcon className="icon-search" onClick={handleDeleteCard}>
              <use href={sprite + '#icon-trash'}></use>
            </WhiteIcon>
          </Icons>
        </BottomInfo>
      </CardContentWrapper>

      {isPopupOpen && (
        // Vit
        <>
          <BackDropHiden
            onClick={() => togglePopUpMenu(task._id)}
          ></BackDropHiden>
          {/* <Backdrop
            backgroundColor={priorityBorderColor}
            onClick={() => togglePopUpMenu(task._id)}
          /> */}
        </>
      )}
      {isPopupOpen && (
        <PopUpMenu>
          <ScrollContent>
            {listForPopup.map(({ title, _id }) => (
              <CustomPopUpItem
                key={_id}
                text={title}
                columnId={_id}
                handleMoveTask={handleMoveTask}
                iconHref={sprite + '#icon-arrow-circle-broken-right'}
              />
            ))}
          </ScrollContent>
          {/* <CustomPopUpItem
            text="In Progress"
            iconHref={sprite + '#icon-arrow-circle-broken-right'}
          />
          <CustomPopUpItem
            text="Done"
            iconHref={sprite + '#icon-arrow-circle-broken-right'}
          /> */}
        </PopUpMenu>
      )}
    </CustomCard>
  );
};

export default TaskCard;
