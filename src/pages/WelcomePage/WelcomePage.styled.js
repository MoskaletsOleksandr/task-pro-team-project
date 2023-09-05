import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #ffffff 25%, #bedbb0 100%);
`;
const Picture = styled.img`
  width: 162px;
  height: 162px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;
const ContainerTitle = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-top: 14px;
  }
`;
const ContainerSvg = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  background-color: #161616;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
const SvgLogo = styled.svg`
  width: 60px;
  height: 55px;
  fill: white;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 35px;
  }
`;
const Title = styled.h1`
  color: #161616;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.6px;
  margin-left: 14px;

  @media screen and (max-width: 768px) {
  font-size: 28px;
`;
const ContentMain = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.p`
  color: #161616;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  width: 473px;
  height: 36px;
  margin-bottom: 48px;
  margin-block-start: 0;

  @media screen and (max-width: 768px) {
    width: 335px;
    height: 54px;
  }
`;
const Nav = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const RegistrationBtn = styled(Link)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  width: 344px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #161616;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 335px;
  }
`;
const LoginBtn = styled(Link)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #161616;
  text-decoration: none;
  cursor: pointer;
`;

export {
  Container,
  Picture,
  ContainerTitle,
  ContainerSvg,
  SvgLogo,
  Text,
  Title,
  Nav,
  RegistrationBtn,
  LoginBtn,
  ContentMain,
};
