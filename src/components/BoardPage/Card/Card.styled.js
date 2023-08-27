import styled from '@emotion/styled';


const CustomCard = styled.div`
  width: 334px;
  height: 154px;
  margin-right: 0;
  border: 1px solid black;
  margin-bottom: 8px;
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
  margin-bottom:14px
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
  color: var( --primary-text-color);
`;
const DeadlineTypography = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var( --card-secondary-text-color);
`;
const DeadlineInfo = styled.p`
  font-size: 12px;
  font-family: 'Poppins';
  color: var( --primary-text-color);
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
align-items: center;
`;
const BottomInfo =  styled.div`
border-top: 1px solid #FFFFFF4D;
display: flex;
padding-top: 14px;
align-items: center;
justify-content: space-between;
`;

const WhiteIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--card-icon-color); 
  stroke-width: 2; 
  fill: none
`;
const Icons = styled.div`
display: inline-flex;
gap:8px;

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
    BottomInfo ,
    PriorityInfo,
    DeadlineInfo,
    // TruncatedTextWithMargin

}
