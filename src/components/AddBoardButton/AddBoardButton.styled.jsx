import styled from '@emotion/styled';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 87.6%;
height: 70px;
// margin-left: 14px;
margin-bottom: 40px;
padding: 14px 4px 14px 0;
border-top: 1px solid rgba(255, 255, 255, 0.1);
border-bottom: 1px solid rgba(255, 255, 255, 0.1);

margin-left: 14px;
@media screen and (min-width: 768px) {
  margin-left: 24px;
}
width: 81.5%;
// padding: 14px 0;
}
`;

export const Text = styled.p`
width: 76px;
color: var(--primary-text-color);
font-size: 14px;
font-weight: 500;
letter-spacing: -0.28px;
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 36px;
background-color: var(--sidebar-button-plus-bg-color);
border-radius: 6px;
border: none;

&:hover,
&:focus {
scale: 1.05;
background-color: var(--modal-btn-bg-color-hover);
}
`;

export const Svg = styled.svg`
stroke: var(--sidebar-button-plus-icon-color);
`;

