import React from // ,{ useState }
'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { currentBoardForScreensPage } from '../../../fakeData/fakeData';
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
} from '../Card/Card.styled';
import CustomPopUpItem from '../PopUp/PopUp';
import sprite from '../../../images/sprite.svg';

const TaskCard = ({ taskId, togglePopUpMenu, isPopupOpen }) => {
  const selectedTask = currentBoardForScreensPage.columns
    .flatMap(column => column.tasks)
    .find(taskData => taskData._id === taskId);

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
            <WhiteIcon
              className="icon-search"
              onClick={() => togglePopUpMenu(taskId)}
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
        <Backdrop
          backgroundColor={priorityBorderColor}
          onClick={() => togglePopUpMenu(taskId)}
        />
      )}
      {isPopupOpen && (
        <PopUpMenu>
          <CustomPopUpItem
            text="In Progress"
            iconHref={sprite + '#icon-arrow-circle-broken-right'}
          />
          <CustomPopUpItem
            text="Done"
            iconHref={sprite + '#icon-arrow-circle-broken-right'}
          />
        </PopUpMenu>
      )}
    </CustomCard>
  );
};

export default TaskCard;
