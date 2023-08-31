import styled from '@emotion/styled';

export const ButtonForm = styled.button`
width: 302px;
height: 49px;
padding: 10px 0 11px;
border-radius: 8px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--modal-btn-bg-color);
color: var(--modal-btn-text-color);
font-size: 14px;
font-weight: 500;
transition: scale 250ms ease-in 0s;

&:hover,
&focus {
scale: 1.05;
}
`;
