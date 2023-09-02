import styled from '@emotion/styled';

export const List = styled.ul`
  width: 100%;
  min-height: 61px;
  margin-bottom: 40px;
  height: calc(100vh - 611px);
  scroll-behavior: smooth;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  @media only screen and (min-width: 768px) {
    height: calc(100vh - 646px);
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
`;