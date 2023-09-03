import styled from '@emotion/styled';

const DashboardContainer = styled.div`
  display: flex;
  /* vit Закоментовано для загального бекграуда */
  /* background-color: var(--screens-page-bg-color); */
`;

const DashboardContent = styled.div`
  display: flex;
  padding-bottom: 16px;
  gap: 14px;
`;

const ColumnWrapper = styled.div`
  // margin-right: 18px;
  // margin-right: 18px;
`;

export { ColumnWrapper, DashboardContainer, DashboardContent };
