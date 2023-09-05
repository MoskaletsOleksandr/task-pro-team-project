import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilteredTasksThunk,
  getAllTasksThunk,
} from 'redux/dashboards/thunks';
import { selectCurrentBoardId } from 'redux/dashboards/selectors';

import {
  FiltersContainer,
  FiltersTitle,
  WraperAllColor,
  AllColor,
  InputRadioBtn,
  AllLabels,
  FilterItem,
  FilterList,
  PriorityLabel,
} from './FiltersModal.styled';
// import { radioButtons } from 'components/Modals/ModalAddEditCard/radioBattons';

const FiltersModal = props => {
  const savedFilter = localStorage.getItem('filterValue');
  const savedcurrentBoardiD = localStorage.getItem('currentBoardId');

  const [selectedFilter, setSelectedFilter] = useState(savedFilter || 'all');
  const [selectedCurrentBoardId, setCurrentBoardId] = useState(
    savedcurrentBoardiD || ''
  );

  const currentBoardId = useSelector(selectCurrentBoardId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCurrentBoardId !== currentBoardId) {
      setSelectedFilter('all');
    }
    localStorage.setItem('currentBoardId', currentBoardId);
    localStorage.setItem('filterValue', selectedFilter);
  }, [currentBoardId, selectedCurrentBoardId, selectedFilter]);

  const handleChange = e => {
    const priorityStatus = e.target.value;
    setSelectedFilter(priorityStatus);
    setCurrentBoardId(currentBoardId);

    if (priorityStatus === 'all') {
      dispatch(getAllTasksThunk(currentBoardId));
    } else {
      dispatch(
        getFilteredTasksThunk({
          boardId: currentBoardId,
          priority: priorityStatus,
        })
      );
    }
  };

  return (
    <FiltersContainer>
      <FiltersTitle>Filters</FiltersTitle>
      <WraperAllColor>
        <AllColor>Label color</AllColor>
        <AllLabels
        // style={
        //   selectedFilter === 'all'
        //     ? { color: 'var(--filter-popup-primary-text-color)' }
        //     : {}
        // }
        >
          <InputRadioBtn
            style={{ opacity: 0 }}
            type="radio"
            value="all"
            checked={selectedFilter === 'all'}
            name="filters"
            onChange={handleChange}
          />
          Show all
        </AllLabels>
      </WraperAllColor>
      {/* List */}
      <FilterList>
        {/* {radioButtons.map(({ priority, color }) => {
          return (
            <FilterItem>
              <PriorityLabel
                style={
                  selectedFilter === 'without'
                    ? { color: 'var(--filter-popup-primary-text-color)' }
                    : {}
                }
              >
                <InputRadioBtn
                  type="radio"
                  value="without"
                  checked={selectedFilter === 'without'}
                  name="filters"
                  onChange={handleChange}
                />
                Without priority
              </PriorityLabel>
            </FilterItem>
          );
        })} */}
        <FilterItem>
          <PriorityLabel
            style={
              selectedFilter === 'without'
                ? { color: 'var(--filter-popup-primary-text-color)' }
                : {}
            }
          >
            <InputRadioBtn
              type="radio"
              value="without"
              checked={selectedFilter === 'without'}
              name="filters"
              onChange={handleChange}
            />
            Without priority
          </PriorityLabel>
        </FilterItem>

        <FilterItem>
          <PriorityLabel
            style={
              selectedFilter === 'low'
                ? { color: 'var(--filter-popup-primary-text-color)' }
                : {}
            }
          >
            <InputRadioBtn
              type="radio"
              value="low"
              checked={selectedFilter === 'low'}
              name="filters"
              onChange={handleChange}
            />
            Low
          </PriorityLabel>
        </FilterItem>
        <FilterItem>
          <PriorityLabel
            style={
              selectedFilter === 'medium'
                ? { color: 'var(--filter-popup-primary-text-color)' }
                : {}
            }
          >
            <InputRadioBtn
              type="radio"
              value="medium"
              checked={selectedFilter === 'medium'}
              name="filters"
              onChange={handleChange}
            />
            Medium
          </PriorityLabel>
        </FilterItem>

        <FilterItem>
          <PriorityLabel
            style={
              selectedFilter === 'high'
                ? { color: 'var(--filter-popup-primary-text-color)' }
                : {}
            }
          >
            <InputRadioBtn
              type="radio"
              value="high"
              checked={selectedFilter === 'high'}
              name="filters"
              onChange={handleChange}
            />
            High
          </PriorityLabel>
        </FilterItem>
      </FilterList>
    </FiltersContainer>
  );
};

export default FiltersModal;
