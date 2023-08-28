import styled from '@emotion/styled';



const DashboardContainer = styled.div`
  display: flex;
  // overflow-x: auto; 
  background-color: var(--screens-page-bg-color);
`;

const DashboardContent = styled.div`
  display: flex;
  padding-bottom: 16px; 
`;

const ColumnWrapper = styled.div`
  margin-right: 16px;
`;

export {
  ColumnWrapper,
  DashboardContainer,
  DashboardContent
}
