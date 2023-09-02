import styled from '@emotion/styled';

export const Span = styled.span`
font-family: Poppins;
color: var(--primary-text-color);
font-size: 16px;
font-weight: 500;
`;

export const LogOutBtn = styled.button(`
display: flex;
gap: 14px;
justify-content: left;
align-items: center;
margin-left: 24px;
width: 305px;
height: 32px;
background-color: transparent;
border: none;
`);

export const Icon = styled.svg`
width: 32px;
height: 32px;
stroke: var(--sidebar-logout-icon-color);
cursor: pointer;
`;
