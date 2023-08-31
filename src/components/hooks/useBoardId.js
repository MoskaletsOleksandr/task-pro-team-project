import { useSelector } from 'react-redux';
import { selectBoardId } from 'redux/dashboards/selectors';

export const useBoardId = () => useSelector(selectBoardId);