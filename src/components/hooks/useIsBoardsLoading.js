import { useSelector } from 'react-redux';
import { selectIsBoardsLoading } from 'redux/dashboards/selectors';

export const useIsBoardsLoading = () => useSelector(selectIsBoardsLoading);