import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
position: relative;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 8px;
margin-left: 14px;
margin-bottom: 70px;

@media screen and (min-width: 768px) {
  margin-left: 24px;
  margin-bottom: 60px;
}
&::before {
  content: '';
  width: 32px;
  height: 32px;
  background-color: var(--sidebar-logo--bg-color);
  cursor: pointer;
  border-radius: 8px;
}
`;

export const StyledLogo = styled.svg`
fill: var(--sidebar-logo--icon-color);
position: absolute;

`;

export const StyledSpanLogo = styled.span`
font-size: 16px;
font-style: normal;
line-height: normal;
font-weight: 600;
letter-spacing: -0.64px;
color: var(--primary-text-color);
`;
