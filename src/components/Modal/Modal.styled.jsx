import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Content = styled.div`
  position: relative;
  background-color: #fff;
  width: 300px;
  height: 200px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const CloseButton = styled.button`
  padding: 0;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 18px;
  height: 18px;
  background-color: black;
`;

export const CloseSVG = styled.svg`
  width: 18px;
  height: 18px;
  fill: white;
`;
