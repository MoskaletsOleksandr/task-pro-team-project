import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import CreateNewBoard from 'components/NewBoard/NewBoard';
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

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Section >
      <BtnFilters type="submit" disabled={true} onClick={handleFilters}>
        <SvgIconFilters>
          + <use href={sprite + '#icon-filter'}></use>
        </SvgIconFilters>
        Filter
      </BtnFilters>

      <InfoContainer>
        <InfoText>
          Before starting your project, it is essential
          <InfoTextAccent onClick={openModal}> to create a board </InfoTextAccent>to visualize and
          track all the necessary tasks and milestones. This board serves as a
          powerful tool to organize the workflow and ensure effective
          collaboration among team members.
        </InfoText>
      </InfoContainer>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CreateNewBoard onClose={closeModal} />
        </Modal>
      )}
    </Section>
  );
};
export default NewDashboard;
