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
  RadioCustom,
} from './FiltersModal.styled';

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
        <AllLabels checked={selectedFilter === 'all'}>
          <InputRadioBtn
            display={'none'}
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
        <FilterItem>
          <PriorityLabel
            style={
              selectedFilter === 'without'
                ? { color: 'var(--filter-popup-primary-text-color)' }
                : {}
            }
          >
            <InputRadioBtn
              display={'none'}
              type="radio"
              value="without"
              checked={selectedFilter === 'without'}
              name="filters"
              onChange={handleChange}
              backgroundColor="var(--filter-without-priority-color)"
            />
            <RadioCustom
              checked={selectedFilter === 'without'}
              backgroundColor="var(--filter-without-priority-color)"
            ></RadioCustom>
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
              display={'none'}
              type="radio"
              value="low"
              checked={selectedFilter === 'low'}
              name="filters"
              onChange={handleChange}
            />
            <RadioCustom
              checked={selectedFilter === 'low'}
              backgroundColor="var(--filter-low-color)"
            ></RadioCustom>
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
              display={'none'}
              type="radio"
              value="medium"
              checked={selectedFilter === 'medium'}
              name="filters"
              onChange={handleChange}
              backgroundColor="var(--filter-medium-color)"
            />
            <RadioCustom
              checked={selectedFilter === 'medium'}
              backgroundColor="var(--filter-medium-color)"
            ></RadioCustom>
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
              display={'none'}
              type="radio"
              value="high"
              checked={selectedFilter === 'high'}
              name="filters"
              onChange={handleChange}
              backgroundColor="var(--filter-high-color)"
            />
            <RadioCustom
              checked={selectedFilter === 'high'}
              backgroundColor="var(--filter-high-color)"
            ></RadioCustom>
            High
          </PriorityLabel>
        </FilterItem>
      </FilterList>
    </FiltersContainer>
  );
};

export default FiltersModal;
