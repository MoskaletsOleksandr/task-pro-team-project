import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';
import Column from '../../components/BoardPage/Column/Column';
import Board from '../../components/BoardPage/Board/Board';
import ColumnModal from '../../components/BoardPage/ColumnModal/ColumnModal';
import FiltersModal from 'components/ModalFilters/FilterModal';
import {
  Section,
  SectionTitle,
  BtnFilters,
  SvgIconFilters,
  BtnAddColumn,
  Title,
  SvgIconPlus,
  SectionBoards,
  WrapSvg,
} from './MainDashboard.styled';
import Modal from 'components/Modal/Modal';
import { createNewColumnThunk } from 'redux/dashboards/thunks';
import { useSelector } from 'react-redux';

const MainDashboard = () => {
  const boardTitle = useSelector(state => state.boards.currentBoard.title);
  const [showTestModal, setShowTestModal] = useState(false);
  const [
    currentColumns,
    // setCurrentColumns
  ] = useState([]);

  const toggleModal = () => {
    setShowTestModal(prevShowTestModal => !prevShowTestModal);
    if (!showTestModal) {
    }
  };

  // Filters Modal
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const toggleFiltersModal = () => {
    setShowFiltersModal(prevShowFiltersModal => !prevShowFiltersModal);
  };

  return (
    <Section>
      <SectionTitle>
        <Title>{boardTitle}</Title>
        <BtnFilters type="submit" onClick={toggleFiltersModal}>
          <SvgIconFilters>
            <use href={sprite + '#icon-filter'}></use>
          </SvgIconFilters>
          Filter
        </BtnFilters>
      </SectionTitle>
      {/* FilterModal */}
      {showFiltersModal && (
        <Modal
          onClose={toggleFiltersModal}
          isOpen={showFiltersModal}
          children={<FiltersModal />}
        />
      )}

      <SectionBoards>
        <Board>
          {currentColumns.map(column => (
            <Column
              key={column._id}
              title={column.title}
              tasks={column.tasks}
              newColumnTitle={null}
              columnId={column._id}
            />
          ))}
        </Board>
        <BtnAddColumn type="submit" onClick={toggleModal}>
          <WrapSvg>
            <SvgIconPlus>
              <use href={sprite + '#icon-plus'}></use>
            </SvgIconPlus>
          </WrapSvg>
          Add another column
        </BtnAddColumn>
      </SectionBoards>
      <ColumnModal
        closeModal={toggleModal}
        isOpen={showTestModal}
        name={'Add column'}
        inputPlaceholder="Title"
        actionThunk={createNewColumnThunk}
        actionPayload={value => ({ body: { title: value } })}
        buttonText={'Add'}
        initialValue={''}
      />
    </Section>
  );
};

export default MainDashboard;
