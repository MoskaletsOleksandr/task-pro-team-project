import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  height: calc(100vh - 24px);
  margin: 0;
  background: var(--sidebar-bg-color);
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  z-index: 100;
  width: 260px;

  // mobile

  @media (max-width: 1440px) {
    position: absolute;
    top: 0;
    bottom: 0;
    transition: transform 500ms;
  }
`;
