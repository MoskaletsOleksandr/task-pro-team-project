import sprite from 'images/sprite.svg';
import { StyledLogo, StyledWrapper, StyledSpanLogo } from './LogoComponent.styled';

const LogoComponent = () => {

  return (
      <StyledWrapper>
        <StyledLogo width="32px" height="32px">
          <use href={`${sprite}#icon-logo-lightning`} />
        </StyledLogo>
        <StyledSpanLogo>Task Pro</StyledSpanLogo>
      </StyledWrapper>
  );
};

export default LogoComponent;