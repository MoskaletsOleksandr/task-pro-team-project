import styled from '@emotion/styled';

export const Span = styled.span`
color: var(--primary-text-color);
font-size: 16px;
font-weight: 500;
`;

export const LogOutBtn = styled.button(`
display: flex;
gap: 14px;
justify-content: center;
align-items: center;
margin-left: 24px;
width: 105px;
height: 32px;
background-color: transparent;
`);

export const Icon = styled.svg`
width: 32px;
height: 32px;
stroke: var(--sidebar-logout-icon-color);
cursor: pointer;
`;
