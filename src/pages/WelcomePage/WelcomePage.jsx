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
import { useDispatch, useSelector } from 'react-redux';
import { GetCurrentUserThunk } from 'redux/thunks';
import {  useEffect } from 'react';
import { Navigate } from 'react-router';

const WelcomePage = () => {
  //  const email=useSelector(state=>state.auth.user.email)
  //  console.log(email)
   const dispatch=useDispatch();
  
  //  dispatch(GetCurrentUserThunk())

  
    try {
      const response=  dispatch(GetCurrentUserThunk()).unwrap().then(data=>{
        if(data){
          return(<Navigate to='/home'/>)
        }
      })
      console.log(response)
    } catch (error) {
      console.log('failed')
    }
 
   
  

 

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
        </Nav>
      </ContentMain>
    </Container>
  );
};

export default WelcomePage;
