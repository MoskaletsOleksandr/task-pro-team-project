import styled from '@emotion/styled';

const DashboardContainer = styled.div`
  display: flex;
  /* overflow-x: auto; */

  /* width: 100vw;
  height: 100vh; */
  background-color: var(--screens-page-bg-color);
`;

const ColumnWrapper = styled.div`
  display: inline-block;
  margin-right: 16px;
`;

export { DashboardContainer, ColumnWrapper };
