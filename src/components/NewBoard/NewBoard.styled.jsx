import styled from '@emotion/styled';

export const NewBoardTitle = styled.h2`
width: 96px;
margin: 0 0 24px 0;
height: 27px;
left: 24px;
top: 24px;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
letter-spacing: -0.02em;
color: var(--modal-title-color);

@media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
}
`;

export const ErrorMessage = styled.p`
color: var(--modal-title-color);
margin-bottom: 10px;
text-align: center;
`;

export const Input = styled.input`
box-sizing: border-box;
margin: 0 0 24px 0;
width: 302px;
height: 49px;
padding-left: 20px;
background: transparent;
opacity: 0.4;
border: 1px solid var(--modal-input-border-color);
box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
border-radius: 8px;
color: var(--modal-title-color);

&::placeholder {
    width: 28px;
    height: 21px;
    left: 18px;
    top: 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: var(-modal-input-placeholder-color);
}

&:not(:placeholder-shown) {
    opacity: 1;
    color: var(--modal-title-color);
}

&:focus {
    opacity: 1;
    outline: none;
    border: 1px solid #bedbb0;
}

@media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
}
`;

export const IconTitle = styled.h3`
margin: 0 0 14px 0;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.02em;
color: var(--modal-title-color);

@media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
}
`;

export const IconWrap = styled.div`
margin: 0 0 24px 0;
`;

export const Icon = styled.svg`
margin-right: 8px;
width: 18px;
height: 18px;
stroke: var(--modal-selected-icon-color);
cursor: pointer;

@media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
}
`;

export const BackgroundTitle = styled.h3`
margin: 0 0 14px 0;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.02em;
color: var(--modal-title-color);

@media screen and (min-width: 1440px) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
}
`;

export const BgIcon = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
width: 260px;
gap: 4px;
margin-bottom: 40px;
`;

export const BackgroundItem = styled.div`
cursor: pointer;
transition: transform 0.3s;
border-radius: 6px;
overflow: hidden;
}
`;

export const BackgroundImage = styled.img`
  width: 28px;
  height: 28px;
`;