import styled from '@emotion/styled';

export const StyledSidebar = styled.aside`
z-index: 1;
position: absolute;
visibility: hidden;
opacity: 0;
top: 0px;
left: -450px;
bottom: 0px;
width: 225px;
height: 100vh;
margin: 0;
background-color: var(--sidebar-bg-color);
transform: translateX(-225px);
transition: transform 250ms ease-in 0s, opacity 250ms ease-in 0s, visibility 250ms ease-in 0s;

&.isOpen {
    visibility: visible;
    opacity: 1;
    left: 0px;
    transform: translateX(0);
}

@media screen and (min-width: 768px){
    width: 260px;
    transform: translateX(-260px);
}

@media screen and (min-width: 1440px){
    position: static;
    top: 0px;
    float: left;
    bottom: 0px;
    width: 260px;
    height: 100vh;
    transition: transform 0s ease-in 0s, opacity 0s ease-in 0s,
    visibility 0s ease-in 0s;
}
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: space-between;
padding-top: 18px;
padding-bottom: 24px;
height: 100%;
background-color: var(--sidebar-bg-color);

@media screen and (min-width: 768px){
    padding-top: 24px;
}
`;
