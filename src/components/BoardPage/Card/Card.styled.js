import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';


const CustomCard = styled.div`
  width: 334px;
  height: 154px;
  margin-right: 0;
  position:relative;
  margin-bottom: 9px;
  border-radius: 8px;
  background-color: var(--card-bg-color);
  color: #fff;
  padding: 14px 24px;
  border-left: 4px solid ${props => props.borderColor};
`;

const TruncatedText = styled.div`
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
  line-height: 1.4;
  height:38px;
  border-bottom: 1px solid var(--card-border-color);
`;


const PriorityCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50px;
`;

const CardContentWrapper = styled.div`
margin-top: 8px;
margin-bottom: 14px;
font-size: 14px;
font-family: 'Poppins';
text-transform: capitalize;
`;

const TitleTypography = styled.h4`
  font-size: 14px;
  font-family: 'Poppins';
  color:var(--card-title-color) ;
  text-transform: capitalize;
`;
const PriorityTypography = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var( --card-secondary-text-color);
`;
const PriorityInfo = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var( --card-primary-text-color);
`;
const DeadlineTypography = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var( --card-secondary-text-color);
`;
const DeadlineInfo = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color:var( --card-primary-text-color);
`;

const PriorityWrapper = styled.div`
display: flex;
align-items: center;
gap: 5px
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
gap: 23px;
align-items: flex-end;
`;
const BottomInfo = styled.div`
display: flex;
padding-top: 14px;
align-items: flex-end;
justify-content: space-between;
`;


const Icons = styled.div`
display: inline-flex;
gap:8px;

`;

const PopUpMenu = styled.div`
position:absolute;
z-index: 1;
display: flex;
flex-direction: column;
gap:8px;
width:135px;
padding:18px;
background-color:var(--progress-popup-bg-color);
border-radius: 8px;
box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
top:35px;
right:100px;
`;

const WhiteIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--card-icon-color); 
  stroke-width: 2; 
  fill: none;
  &:hover{
    stroke:var(--progress-popup-text-color-hover);
  }
`;

const BellIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke:var(--progress-popup-text-color-hover);
  stroke-width: 2; 
  fill: none;
`;


const PopUpItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color:var(--progress-popup-text-color);
  &:hover {
    color: var(--progress-popup-text-color-hover);
    stroke: var(--progress-popup-text-color-hover);
    cursor: pointer;
  }
/* } */
`;

const fillFromLeft = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background-color:var(--progress-backdrop);
  animation: ${fillFromLeft} 1s ease-in-out forwards; 
  z-index: 0; 
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
  Backdrop,
  BellIcon
}
