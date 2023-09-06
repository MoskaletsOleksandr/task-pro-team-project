import styled from '@emotion/styled';

export const ModalTitle = styled.p`
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => props.fontWeight || '500'};
  line-height: ${props => props.lineHeight || '1.2'};
  margin-bottom: ${props => props.marginBottom || '24px'};
  color: ${props => props.color || 'var(--modal-title-color)'};
`;

export const ModalLabel = styled.label`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  margin-bottom: ${props => props.marginBottom || '24px'};
  text-align: ${props => props.textAlign || 'center'};
`;

export const ModalInput = styled.input`
  display: ${props => props.display || 'flex'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '302px'};
  height: ${props => props.height || '46px'};
  border: ${props =>
    props.border || '1px solid var(--modal-input-border-color)'};
  border-radius: ${props => props.borderRadius || '8px'};
  padding-top: ${props => props.padding || '14px'};
  padding-right: ${props => props.padding || '18px'};
  padding-bottom: ${props => props.padding || '14px'};
  padding-left: ${props => props.padding || '18px'};
  font-size: ${props => props.fontSize || '14px'};
  line-height: ${props => props.lineHeight || '1.2'};
  background-color: ${props =>
    props.backgroundColor || 'var(--modal-input-bg-color)'};
  color: ${props => props.color || 'var(--modal-input-text-color)'};
  accent-color: ${props => props.accentColor || 'var(--modal-input-text-color)'};
  outline: transparent;
  opacity: 0.4;
  transition: opacity var(--timing-function);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  cursor: text;

  &:hover,
  &:focus {
    border-color: var(--modal-input-border-color);
    opacity: 1;
  }
`;

export const ModalTextarea = styled.textarea`
  /* display: ${props => props.display || 'flex'}; */
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '352px'};
  height: ${props => props.height || '120px'};
  border: ${props =>
    props.border || '1px solid var(--modal-input-border-color)'};
  border-radius: ${props => props.borderRadius || '8px'};
  padding-top: ${props => props.padding || '14px'};
  padding-right: ${props => props.padding || '18px'};
  padding-bottom: ${props => props.padding || '14px'};
  padding-left: ${props => props.padding || '18px'};
  font-size: ${props => props.fontSize || '14px'};
  line-height: ${props => props.lineHeight || '1.2'};
  background-color: var(--modal-input-bg-color);
  color: var(--modal-input-text-color);
  outline: transparent;
  opacity: 0.4;
  transition: opacity var(--timing-function);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  resize: ${props => props.resize || 'none'};
  cursor: text;
  overflow-y:auto;
  &:hover,
  &:focus {
    border-color: var(--modal-input-border-color);
    opacity: 1;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--vertical-scroll-bar-bg-color);
    border-radius: 4px;
    height: 60px;
    margin-right: 8px; 
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--vertical-scroll-slider-bg-color);
    border-radius: 4px;
    margin-right:8px;
    margin-top:11px;
    margin-bottom:11px;
  }

`;

export const ModalSvg = styled.svg`
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '18px'};
  stroke: ${props => props.stroke || 'var(--modal-selected-plus-color)'};
  cursor: pointer;
  &:hover,
  &:focus,
  &:checked {
    stroke: ${props => props.stroke || 'var(--modal-selected-plus-color)'};
  }
`;

export const ModalWrapperComponent = styled.div`
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '8px'};
  max-width: ${props => props.maxWidth || '100%'};
  margin-bottom: ${props => props.marginBottom || '24px'};
`;

export const ModalImg = styled.div`
  position: relative;
  width: ${props => props.width || '28px'};
  height: ${props => props.height || '28px'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  border: ${props =>
    props.border || '1px solid var(--modal-input-border-color)'};
  border-radius: ${props => props.borderRadius || '6px'};
  cursor: pointer; 
  ::after{
    opacity:  ${props => props.radioChecked || 0};
    position: absolute;
    left: calc(50% - 5px);
    top: calc(50% - 5px);;
    display: flex;    
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid white;
  }
`;

export const ModalButton = styled.button`
  position: ${props => props.position || 'static'};
  top: ${props => props.top || '0px'};
  right: ${props => props.right || '0px'};
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '49px'};
  padding: ${props => props.padding || '10px 0px'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '8px'};
  font-family: 'Poppins', sans-serif;
  font-weight: ${props => props.fontWeight || '500'};
  font-size: ${props => props.fontSize || '14px'};
  line-height: ${props => props.lineHeight || '1.2'};
  background-color: ${props =>
    props.backgroundColor || 'var(--modal-btn-bg-color)'};
  color: ${props => props.color || 'var(--modal-btn-text-color)'};
  margin-top: ${props => props.marginTop || '0px'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  

  &:hover,
  &:focus {
    background-color: ${props =>
      props.backgroundColorHover || 'var(--modal-btn-bg-color-hover)'};
    outline: none;
  }
`;

export const ModalSvgPlus = styled.div`
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '28px'};
  height: ${props => props.height || '28px'};
  padding: ${props => props.padding || '7px'};
  background-color: ${props =>
    props.backgroundColor || 'var(--modal-plus-btn-bg-color)'};
  border-radius: ${props => props.borderRadius || '8px'};
  margin-right: ${props => props.marginRight || '8px'};
`;
