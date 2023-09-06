import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 0;
  background: var(--sidebar-bg-color);
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 100;
  width: 260px;
  height:100vh;

  @media (max-width: 1439px) {
    position: absolute;
    top: 0;
    bottom: 0;
    transition: transform 500ms;
  }
`;


export const BackDropHidden = styled.div`
  display: none;
  @media (max-width: 1439px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Show only on tablets and mobile */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--progress-backdrop);
    overflow-y: auto;
    z-index: 1;
  }
`;