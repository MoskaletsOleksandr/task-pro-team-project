import photoTitle from '../../images/Image-title.png';
import sprite from '../../images/sprite.svg';
import {
  Container,
  Text,
  Title,
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
            >
              <path
                d="M4.99714 22.5403C5.36379 20.6329 5.67612 18.6251 6.11745 16.6174C6.33473 15.5666 6.06993 15.1182 4.89529 15.1985C3.72065 15.2788 2.41022 15.2387 1.1609 15.1985C-0.0884262 15.1584 -0.31249 14.5293 0.407229 13.6325C3.95151 9.25552 7.53652 4.93211 11.108 0.622087C11.5086 0.133528 11.9703 -0.214486 12.6289 0.153605C13.2875 0.521697 13.1517 0.976793 13.0431 1.52558C12.6492 3.53336 12.3233 5.54113 11.8888 7.50875C11.6647 8.52602 11.9567 8.88742 13.0159 8.84727C14.0789 8.79372 15.1441 8.79372 16.2071 8.84727C16.8114 8.84727 17.6058 8.53272 17.9181 9.3559C18.2305 10.1791 17.5718 10.5271 17.2391 11.0157C15.8812 12.6888 14.5051 14.3597 13.111 16.0284C11.0695 18.4645 9.04386 20.8917 7.03408 23.3099C6.64027 23.7851 6.19893 24.1666 5.52674 23.9256C4.85455 23.6847 4.99714 23.1158 4.99714 22.5403Z"
                fill="white"
              />
            </svg> */}
            <svg width="18" height="24" viewBox="0 0 18 24" fill="white">
              <use href={sprite + '#icon-logo-lightning'}></use>
            </svg>
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
        </Nav>
      </ContentMain>
    </Container>
  );
};

export default WelcomePage;
