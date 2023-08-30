import { useSelector } from 'react-redux';
import { selectAllBoards } from 'redux/dashboards/selectors';

export const useAllBoards = () => useSelector(selectAllBoards);