import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 0px 24px;
  background-color: var(--screens-page-bg-color);
`;

export const InfoContainer = styled.div`
  height: calc(100vh - 102px);
  widows: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const InfoText = styled.p`
  width: 486px;
  font-family: Poppins;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align:center;
  color: var(--new-dashboadr-text-color);
`;

export const InfoTextAccent = styled.span`
  color: var(--new-dashboadr-text-accent-color);
  cursor: pointer;
`;
