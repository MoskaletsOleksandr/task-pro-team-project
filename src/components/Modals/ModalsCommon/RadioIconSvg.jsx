import SvgModal from './SvgModal';
import spriteIcons from '../../common/Icon/modalIcons.svg';
import LabelModal from './LabelModal';
import InputModal from './InputModal';

const RadioIconSvg = ({ id, ...props }) => {
  return (
    <LabelModal>
      <InputModal type="radio" name="iconBoard" display="none" />
      <SvgModal {...props}>
        <use href={spriteIcons + `#${id}`} />
      </SvgModal>
    </LabelModal>
  );
};

export default RadioIconSvg;
