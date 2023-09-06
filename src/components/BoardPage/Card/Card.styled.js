import styled from '@emotion/styled';

const CustomCard = styled.div`
  max-height: 154px;
  position: relative;
  margin-bottom: 9px;
  border-radius: 8px;
  background-color: var(--card-bg-color);
  color: #fff;
  padding: 14px 24px;
  border-left: 4px solid ${props => props.borderColor};
  &:hover {
    background-color: var(--card-hover);
  }

  @media screen and (max-width: 300px) {
    min-width: 290px;
  }
  @media screen and (max-width: 374px) {
    min-width: 300px;
  }
  @media screen and (min-width: 375px) {
    min-width: 334px;
  }
`;

const TruncatedText = styled.div`
  width: 280px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--card-secondary-text-color);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.24px;
  margin-top: 8px;
  line-height: 1.5;
  height: 38px;
  border-bottom: 1px solid var(--card-border-color);
`;

const PriorityCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
`;

const CardContentWrapper = styled.div`
  margin-bottom: 14px;
  font-size: 14px;
  font-family: 'Poppins';
  text-transform: capitalize;
`;

const TitleTypography = styled.h4`
  font-size: 14px;
  font-family: 'Poppins';
  color: var(--card-title-color);
  text-transform: capitalize;
`;
const PriorityTypography = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var(--card-secondary-text-color);
`;
const PriorityInfo = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var(--card-primary-text-color);
`;
const DeadlineTypography = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var(--card-secondary-text-color);
`;
const DeadlineInfo = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var(--card-primary-text-color);
`;

const PriorityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const DedlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PriorityDateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PriorityDateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 300px) and (max-width: 374px) {
    gap:5px;
} 

@media screen and (min-width: 375px) {
   gap:23px;
  
`;
const BottomInfo = styled.div`
  display: flex;
  padding-top: 14px;
  align-items: flex-end;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: inline-flex;
  gap: 8px;
`;

const PopUpMenu = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 160px;
  padding: 10px;
  max-height: 85px;
  background-color: var(--progress-popup-bg-color);
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  right: 25%;
  top: ${props =>
    props.itemCount === 1 ? '37%' : props.itemCount === 2 ? '30%' : '21%'};
`;

const ScrollContent = styled.div`
  overflow-y: ${props => (props.scrollable ? 'auto' : 'hidden')};
  display: flex;
  flex-direction: column;
  gap: 6px;

  ::-webkit-scrollbar {
    width: 8px;
    margin-left: 8px;
  }

  ::-webkit-scrollbar-thumb {
    // background-color: var(--column-add-btn-bg-color);
    background-color: var(--vertical-scroll-bar-bg-color);
    border-radius: 4px;
    // height: 10px;
    margin-left: 8px;
  }

  ::-webkit-scrollbar-track {
    // background-color: var(--screens-page-bg-color);
    background-color: var(--vertical-scroll-slider-bg-color);
    border-radius: 4px;
    margin-left: 8px;
  }
`;

const WhiteIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--card-icon-color);
  stroke-width: 2;
  fill: none;
  &:hover {
    stroke: var(--progress-popup-text-color-hover);
    cursor: pointer;
  }
`;

const BellIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--progress-popup-text-color-hover);
  stroke-width: 2;
  fill: none;
`;

const PopUpItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--progress-popup-text-color);
  &:hover {
    color: var(--progress-popup-text-color-hover);
    stroke: var(--progress-popup-text-color-hover);
    cursor: pointer;
  }
`;

const BackDropHiden = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--progress-backdrop);
  overflow-y: auto;
  z-index: 1;
  width: 100%;
`;

export {
  PriorityCircle,
  TruncatedText,
  CustomCard,
  CardContentWrapper,
  TitleTypography,
  PriorityTypography,
  DeadlineTypography,
  PriorityWrapper,
  DedlineWrapper,
  PriorityDateContainer,
  PriorityDateItem,
  WhiteIcon,
  Icons,
  BottomInfo,
  PriorityInfo,
  DeadlineInfo,
  PopUpMenu,
  PopUpItem,
  BellIcon,
  BackDropHiden,
  ScrollContent,
};
