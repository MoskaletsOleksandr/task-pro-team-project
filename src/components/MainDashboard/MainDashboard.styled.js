import styled from '@emotion/styled';

export const Section = styled.section`
  width: 100vw;
  height: 100vw;
  margin-bottom: 9px;
  max-height: 100vh;
  overflow-x: auto;
  background-color: ${props =>
    props.backgroung.desktopURL === null ? 'var(--screens-page-bg-color)' : []};
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url(${props => props.backgroung.desktopURL !== null ? props.backgroung.desktopURL : []});
  //--
  @media screen and (min-width: 320px) and (max-width: 374px) {
    padding: 0px 15px;
    background-image: url(${props => props.backgroung.desktopURL !== null ? props.backgroung.mobileURL : []});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        Section{ background-image: url(${props => props.backgroung.desktopURL !== null ? props.backgroung.mobileRetinaURL : []});}
     
    }
  }

  //--
  @media screen and (min-width: 375px) {
    padding: 0px 20px;
  }

  //--
  @media (min-width: 768px) {
    width: 100vw;
    /* max-height: 100vh; */
    padding: 0px 40px;
    background-image: url(${props => props.backgroung.desktopURL !== null ? props.backgroung.tabletURL : []});
  }

  //--
  @media (min-width: 1439px) {
    width: 100%;
    padding: unset;
    max-height: 100vh;
    background-image: url(${props => props.backgroung.desktopURL !== null ? props.backgroung.desktopURL : []});
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  @media (min-width: 1439px) {
    padding: 0px 25px;
  }
`;

export const BtnFilters = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 20px;
  margin-top: 14px;
  margin-left: auto;

  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  /* --add-column-btn-text-color */
  color: var(--filter-text-color);

  border: none;
  border-radius: 3px;
  background-color: var(--screens-page-bg-color);
  cursor: pointer;
  &:hover {
    scale: 1.04;
    transition: scale 350ms;
    box-shadow: 2px 1px 3px 2px rgba(0, 0, 0, 0.7);
    -webkit-box-shadow: 2px 1px 3px 2px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 2px 1px 3px 2px rgba(0, 0, 0, 0.7);
  }
`;

export const SectionBoards = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  @media (min-width: 1439px) {
    padding: 0px 20px;
  }

  ::-webkit-scrollbar {
    height: 12px;
    width: 100w;
    padding-bottom: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--horizontal-scroll-slider-bg-color);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--horizontal-scroll-bar-bg-color);
    border-radius: 12px;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 5px;
  }
`;

export const SvgIconFilters = styled.svg`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  stroke: var(--add-column-btn-text-color);
  fill: var(--screens-page-bg-color);
`;

export const Title = styled.h1`
  padding: 10px 0px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: var(--add-column-btn-text-color);
`;

export const BtnAddColumn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 335px;
  width: 335px;
  height: 56px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--add-column-btn-text-color);
  margin-left: 16px;

  border: none;
  border-radius: 8px;
  background: var(--add-column-btn-bg-color);

  transition-property: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  :focus {
    scale: 1.04;
    transition: scale 350ms;
   
    background-color: var(--column-add-btn-bg-color-hover);
    transform: background-color;
  }
`;

export const WrapSvg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  content: '';
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: var(--add-column-btn-plus-bg-color);
`;

export const SvgIconPlus = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--add-column-btn-plus-color);
  background-color: var(--add-column-btn-plus-bg-color);
`;
