import styled from '@emotion/styled';
import { ReactComponent as Google } from '../../../images/google.svg';

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #161616;
`;
const StyledContainer = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  gap: 10px;
  letter-spacing: -0.02em;
  width: 344px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  color: #161616;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding-left: 20px;
  }
`;

export const GoogleButton = () => {
  return (
    <StyledContainer>
      <Google width="30" height="30" />
      <StyledLink href="https://task-pro-group-1-backend.onrender.com/users/google">
        Continue with Google
      </StyledLink>
    </StyledContainer>
  );
};
