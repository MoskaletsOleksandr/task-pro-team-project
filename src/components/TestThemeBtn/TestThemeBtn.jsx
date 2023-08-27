import { ButtonStyled } from './TestThemeBtn.styled';

export const TestThemeBtn = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
