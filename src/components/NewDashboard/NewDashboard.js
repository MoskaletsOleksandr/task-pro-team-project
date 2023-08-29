import React from 'react';
import {
  Section,
  InfoText,
  InfoTextAccent,
  InfoContainer,
} from './NewDashBoard.styled';
import sprite from '../../images/sprite.svg';

import {
  BtnFilters,
  SvgIconFilters,
} from '../MainDashboard/MainDashboard.styled';

const NewDashboard = () => {
  const handleFilters = e => {
    alert('Handel Button Filters');
  };

  return (
    <Section>
      <BtnFilters type="submit" onClick={handleFilters}>
        <SvgIconFilters>
          + <use href={sprite + '#icon-filter'}></use>
        </SvgIconFilters>
        Filter
      </BtnFilters>
      <InfoContainer>
        <InfoText>
          Before starting your project, it is essential
          <InfoTextAccent> to create a board </InfoTextAccent>to visualize and
          track all the necessary tasks and milestones. This board serves as a
          powerful tool to organize the workflow and ensure effective
          collaboration among team members.
        </InfoText>
      </InfoContainer>
    </Section>
  );
};
export default NewDashboard;
