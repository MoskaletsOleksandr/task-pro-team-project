import React from 'react'; // ,{ useState }
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
  Backdrop,
  BackDropHiden,
  BellIcon,
} from '../Card/Card.styled';
import CustomPopUpItem from '../PopUp/PopUp';
import sprite from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { updateTasksColumnByIdThunk } from 'redux/dashboards/thunks';

const TaskCard = ({ task, columnId, togglePopUpMenu, isPopupOpen }) => {
  const dispatch = useDispatch();
  const today = new Date().toISOString().slice(0, 10);
  const columns = useSelector(state => state.boards.currentBoard.columns);

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

  const isTodayDeadline = selectedTask.deadline === today;

  const listForPopup = columns.filter(column => column._id !== columnId);
  console.log('listForPopup: ', listForPopup);

  const handleMoveTask = columnId => {
    console.log('handleRemoveTask to', columnId);
    dispatch(
      updateTasksColumnByIdThunk({
        idTask: task._id,
        body: { newColumnId: columnId },
      })
    );
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
              <DeadlineInfo>{selectedTask.deadline}</DeadlineInfo>
            </DedlineWrapper>
          </PriorityDateContainer>
          <Icons>
            {isTodayDeadline && (
              <BellIcon className="icon-search">
                <use href={sprite + '#icon-bell'} style={{ color: 'yellow' }} />
              </BellIcon>
            )}
            <WhiteIcon
              className="icon-search"
              onClick={() => togglePopUpMenu(task._id)}
            >
              <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
            </WhiteIcon>
            <WhiteIcon className="icon-search">
              <use href={sprite + '#icon-pencil-01'}></use>
            </WhiteIcon>
            <WhiteIcon className="icon-search">
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
          <Backdrop
            backgroundColor={priorityBorderColor}
            onClick={() => togglePopUpMenu(task._id)}
          />
        </>
      )}
      {isPopupOpen && (
        <PopUpMenu>
          {listForPopup.map(({ title, _id }) => (
            <CustomPopUpItem
              key={_id}
              text={title}
              columnId={_id}
              handleMoveTask={handleMoveTask}
              iconHref={sprite + '#icon-arrow-circle-broken-right'}
            />
          ))}
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
