import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 0px 24px;
  background-color: var(--screens-page-bg-color);
`;

export const InfoContainer = styled.div`
  height: 100vh;
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
  /* color: var(--add-column-btn-text-color); */
  color: var(--new-dashboadr-text-color);
`;

export const InfoTextAccent = styled.span`
  color: var(--new-dashboadr-text-accent-color);
`;
