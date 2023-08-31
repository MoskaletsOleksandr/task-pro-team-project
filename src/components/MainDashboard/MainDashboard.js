import React, { useState } from 'react';
import // useDispatch,
// useSelector,
'react-redux';
import sprite from '../../images/sprite.svg';
// import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { currentBoardForScreensPage } from '../../fakeData/fakeData';
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

// import {
//   createNewBoardThunk,
//   createNewColumnThunk,
//   getCurrentBoardThunk,
// } from 'redux/dashboards/thunks';

const MainDashboard = () => {
  const [showTestModal, setShowTestModal] = useState(false);

  const [currentColumns, setCurrentColumns] = useState(
    currentBoardForScreensPage.columns
  );
  const [newColumnTitle, setNewColumnTitle] = useState('');
  console.log(newColumnTitle);
  const toggleModal = () => {
    setShowTestModal(prevShowTestModal => !prevShowTestModal);
    if (!showTestModal) {
      setNewColumnTitle('');
    }
  };

  const handleCreateNewColumn = newColumn => {
    setCurrentColumns(prevColumns => [...prevColumns, newColumn]);
    toggleModal();
  };

  // Filters Modal
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const toggleFiltersModal = () => {
    setShowFiltersModal(prevShowFiltersModal => !prevShowFiltersModal);
  };

  return (
    <Section>
      <SectionTitle>
        <Title>Project office</Title>
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

      {/* <FiltersModal /> */}

      <SectionBoards>
        <Board>
          {currentColumns.map(column => (
            <Column
              key={column._id}
              title={column.title}
              tasks={column.tasks}
              newColumnTitle={null}
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
        name="Add Column"
        addColumn={handleCreateNewColumn}
        newColumnTitle={newColumnTitle}
      />
    </Section>
  );
};

export default MainDashboard;
