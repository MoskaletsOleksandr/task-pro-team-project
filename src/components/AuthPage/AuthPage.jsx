import { useParams } from 'react-router-dom';
import RegistrationForm from 'components/registrationForm/RegistrationForm';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/WelcomePage/WelcomePage.styled';
import axios from 'axios';


const instance = axios.create({
  baseURL: ' https://task-pro-group-1-backend.onrender.com',
});

const signUp = async body => {
  const response = await instance.post('users/register', body);
  // setToken(`Bearer ${response.data.token}`);
  console.log(response.data)
  return response.data;
};

const AuthPage = () => {
  const { id } = useParams();

  const getUserData=(data)=>{
console.log(data);
const{name:login,email,password}=data;
console.log(login,email,password)
const request=JSON.stringify({login,email,password})
console.log("request",request)
registration(request);
  }

  const registration=async(request)=>{
    try {
      const data=await signUp(request);
      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
    
  }
  
  if (id === 'register') {
    return <Container><RegistrationForm getData={getUserData}/></Container>;
  }
  if (id === 'login') {
    return <Container><LoginForm/></Container>;
  }
};
export default AuthPage;
