import ButtonModal from './ButtonModal';
import SvgModal from './SvgModal';
import SvgPlusModal from './SvgPlusModal';
// import WrapperComponentModal from "./WrapperComponentModal";
import sprite from '../../../images/sprite.svg';

const ButtonPlusModal = ({ onClick, name, children, type, ...rest }) => {
  return (
    <ButtonModal onClick={onClick} name={name} type={type} {...rest}>
      <SvgPlusModal>
        <SvgModal>
          <use href={sprite + '#icon-plus'} />
        </SvgModal>
      </SvgPlusModal>
      {children}
    </ButtonModal>
  );
};

export default ButtonPlusModal;
