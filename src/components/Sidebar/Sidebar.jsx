import React from 'react';
import BoardList from 'components/BoardList/BoardList';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import NeedHelp from 'components/NeedHelp/NeedHelp';
import LogoComponent from 'components/LogoComponent/LogoComponent';
import { Container, BackDropHidden } from './Sidebar.styled';


function Sidebar({ isOpen }) {
  return (
    <>
      {isOpen && <BackDropHidden isOpen={isOpen} />}
      <Container className="sidebar" isOpen={isOpen}>
        <LogoComponent />
        <BoardList />
        <NeedHelp />
        <LogoutBtn />
      </Container>
    </>
  );
}

export default Sidebar;
