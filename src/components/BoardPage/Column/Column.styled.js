import styled from '@emotion/styled';

const WhiteIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--card-icon-color);
  stroke-width: 2;
  fill: none;
  &:hover{
    stroke:var(--progress-popup-text-color-hover);
    cursor: pointer;
  }
`;
const Icons = styled.div`
  display: inline-flex;
  gap: 8px;
  margin-right: 27px;
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
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (max-width: 300px) {
    min-width: 290px;
} 
  @media screen  and (max-width: 374px) {
  width: 300px;
} 
  @media screen and (min-width: 375px) {
  width:334px;
}
`;


const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

`;


const ScrollContainer = styled.div`
  margin-bottom:14px;
  overflow-y: hidden;
  @media screen and (min-width: 375px) {
    height:100%;
  }
`;


const ScrollContent = styled.div`
overflow-y: auto;
padding-right: 8px;
box-sizing: border-box;
height: calc(100vh - 290px);



::-webkit-scrollbar {
  width: 8px;
  margin-left:8px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--vertical-scroll-bar-bg-color);
  border-radius: 4px;
  height: 10px;
  margin-left:8px;
}

::-webkit-scrollbar-track {
  background-color: var(--vertical-scroll-slider-bg-color);
  border-radius: 4px;
  height: 130px;
  margin-left:8px;
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
