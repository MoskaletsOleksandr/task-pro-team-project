import BoardList from 'components/BoardList/BoardList';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import LogoComponent from 'components/LogoComponent/LogoComponent';
import { StyledSidebar, Container } from './Sidebar.styled';

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar className={isOpen ? 'isOpen' : null}>
      <Container>
        <LogoComponent />
        <BoardList />
        <NeedHelp />

        <LogoutBtn />
      </Container>
    </StyledSidebar>
  );
}

export default Sidebar;