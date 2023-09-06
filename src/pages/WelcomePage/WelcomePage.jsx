import { GoogleButton } from 'components/common/GoogleButton/GoogleButton';
import photoTitle from '../../images/Image-title.png';
import sprite from '../../images/sprite.svg';
import {
  Container,
  Text,
  Title,
  SvgLogo,
  RegistrationBtn,
  LoginBtn,
  Nav,
  ContentMain,
  Picture,
  ContainerTitle,
  ContainerSvg,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <ContentMain>
        <Picture src={photoTitle} alt="user" />
        <ContainerTitle>
          <ContainerSvg>
            <SvgLogo>
              <use href={sprite + '#icon-logo-lightning'}></use>
            </SvgLogo>
          </ContainerSvg>
          <Title>Task Pro</Title>
        </ContainerTitle>
        <Text>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </Text>

        <Nav>
          <RegistrationBtn to="auth/register">Registration</RegistrationBtn>
          <LoginBtn to="auth/login">Log In</LoginBtn>
          <GoogleButton />
        </Nav>
      </ContentMain>
    </Container>
  );
};

export default WelcomePage;
