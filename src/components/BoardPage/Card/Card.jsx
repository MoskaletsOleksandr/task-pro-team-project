import React from 'react';
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
} from '../Card/Card.styled';
import sprite from '../../../images/sprite.svg';

const TaskCard = ({ taskId }) => {
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
            <WhiteIcon className="icon-search">
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
    </CustomCard>
  );
};

export default TaskCard;
