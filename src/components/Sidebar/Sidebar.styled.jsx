import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  margin: 0;
  background: var(--sidebar-bg-color);
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 100;
  width: 260px;
  height:100vh;

  // mobile

  @media (max-width: 1439px) {
    position: absolute;
    top: 0;
    bottom: 0;
    transition: transform 500ms;
  }
`;
