import NewDashboard from '../../components/NewDashboard/NewDashboard';
import MainDashboard from '../../components/MainDashboard/MainDashboard';

const ScreenPage = () => {
  const isVisibleMainDashboard = true;

  return isVisibleMainDashboard ? <MainDashboard /> : <NewDashboard />;
};
export default ScreenPage;
