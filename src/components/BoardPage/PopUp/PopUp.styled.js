import styled from 'styled-components';


export const PopUpItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right:10px;
  color: var(--progress-popup-text-color);
    &:hover {
      color: var(--progress-popup-text-color-hover);
      stroke: var(--progress-popup-text-color-hover);
      cursor: pointer;

  }
`;

