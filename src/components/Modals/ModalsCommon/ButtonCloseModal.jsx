import ButtonModal from './ButtonModal';
import sprite from '../../../images/sprite.svg';
import SvgModal from './SvgModal';

const ButtonCloseModal = ({ onClick, id, ...props }) => {
  return (
    <ButtonModal
      onClick={onClick}
      width="18px"
      height="18px"
      borderRadius="0px"
      backgroundColor='transparent'
      backgroundColorHover='transparent'
      position='absolute'
      top='14px'
      right='14px'
    >
      <SvgModal {...props}>
        <use href={sprite + '#icon-close'} />
      </SvgModal>
    </ButtonModal>
  );
};

export default ButtonCloseModal;
