import styled from '@emotion/styled';

const WhiteIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--card-icon-color);
  stroke-width: 2;
  fill: none;
`;
const Icons = styled.div`
  display: inline-flex;
  gap: 8px;
  margin-right: 27px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-left: 20px;
  color: var(--card-title-color);
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
  text-transform: capitalize;
`;

const TitleIcon = styled.div`
  display: inline-flex;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  width: 338px;
  padding-top: 18px;
  padding-bottom: 17px;
  margin-bottom: 14px;
  align-items: center;
  justify-content: space-between;
`;

const ScrollContainer = styled.div`
  // height: 70vh;
  overflow-y: hidden;
  margin-bottom:100px
`;


const ScrollContent = styled.div`
height: 56vh;
overflow-y: auto;
padding-right: 8px;
width: 100%; 
box-sizing: border-box;

 
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--vertical-scroll-bar-bg-color);
  border-radius: 4px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: var(--vertical-scroll-slider-bg-color);
  border-radius: 4px;
  margin-left: 16px;
  height: 130px;
}
`;

export {
  WhiteIcon,
  ScrollContainer,
  ScrollContent,
  Title,
  TitleIcon,
  ColumnContainer,
  Icons,
};
