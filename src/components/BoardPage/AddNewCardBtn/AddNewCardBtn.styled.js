import styled from '@emotion/styled';

export const BtnAddNewCard = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 56px;
  // margin-top: 9px;
  // margin-left: auto;

  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--column-add-btn-text-color);

  border: none;
  border-radius: 8px;
  background-color: var(--column-add-btn-bg-color);

  transition-property: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  &:hover,
  :focus {
    background-color: var(--column-add-btn-bg-color-hover);
    transform: background-color;
  }

  @media screen and (max-width: 300px) {
    min-width: 290px;
} 
@media screen  and (max-width: 374px) {
  width: 300px;
} 
  @media screen and (min-width: 375px) {
  width:334px;
}

`;

export const WrapSvg = styled.div`
  margin-right: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  content: '';
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: var(--column-add-btn-plus-bg-color);
`;

export const SvgIconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--column-add-btn-plus-color);
  background-color: var(--column-add-btn-plus-bg-color);
`;
