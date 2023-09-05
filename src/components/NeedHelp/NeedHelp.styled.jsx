import styled from '@emotion/styled';

export const Container = styled.div`
align-self: center;
background-color: var(--sidebar-active-board-bg-color);
border-radius: 8px;
width: 197px;
height: 238px;
margin-bottom: 28px;
margin-left: 24px;
margin-right: 24px;
padding: 15px;

@media screen and (min-width: 768px) {
    width: 212px;
    height: 272px;
    padding: 20px;
    margin: auto 24px 28px 24px;
}
`;

export const Text = styled.p`
width: 150px;
margin-bottom: 19px;
color: var(--primary-text-color);
font-size: 12px;
line-height: 1.34;
letter-spacing: -0.24px;

@media screen and (min-width: 768px) {
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: -0.28px;
}
`;

export const Span = styled.span`
color: var(--link-text-color);
`;

export const Button = styled.button`
color: var(--primary-text-color);
width: 197px;
font-size: 12px;
font-weight: 500;
display: flex;
justify-content: left;
align-items: center;
height: 20px;
background-color: transparent;
border: none;
gap: 8px;
padding-bottom: 19px;
`;

export const Svg = styled.svg`
stroke: var(--sidebar-needhelp-icon-color);
`;

export const Image = styled.img`
margin-bottom: 14px;
`;

export const ButtonText = styled.span`
font-family: Poppins;
// margin-left: 8px;
color: var(--primary-text-color);
font-size: 12px;
font-weight: 500;
`;
