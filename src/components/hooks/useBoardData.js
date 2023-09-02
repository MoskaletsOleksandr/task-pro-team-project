import { useSelector } from 'react-redux';
import { selectBoardData } from 'redux/dashboards/selectors';

export const useBoardData = () => useSelector(selectBoardData);