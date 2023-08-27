import React from 'react';
// import { ReactComponent as EyeIcon } from '../../images/eye.svg';
import styled from '@emotion/styled';
import sprite from '../../images/sprite.svg';

const IconWrapper = styled.div`
  display: inline-block;
  margin-left: -40px;
  margin-top: 25px;
`;
const StyledSvg = styled.svg`
  width: 34px;
  height: 34px;
  fill: none;
  stroke: white;
`;

function Eyesvg({ onClick }) {
  return (
    // <IconWrapper onClick={onClick}><EyeIcon width='20px' height='20px'/></IconWrapper>

    <IconWrapper onClick={onClick}>
      <StyledSvg>
        <use href={sprite + '#icon-eye'}></use>
      </StyledSvg>
    </IconWrapper>

    // <IconWrapper onClick={onClick}>
    //  <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="18"
    //     height="18"
    //     viewBox="0 0 18 18"
    //     fill="none"
    //   >
    //     <path
    //       d="M0.75 9C0.75 9 3.75 3 9 3C14.25 3 17.25 9 17.25 9C17.25 9 14.25 15 9 15C3.75 15 0.75 9 0.75 9Z"
    //       stroke="white"
    //       stroke-width="1.3"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //     />
    //     <path
    //       d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
    //       stroke="white"
    //       stroke-width="1.3"
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //     />
    //   </svg>
    // </IconWrapper>
  );
}

export default Eyesvg;
