import { BtnForm, ContainerSvg, Svg } from './NewBoardButton.styled';
import sprite from '../../images/sprite.svg';

function NewBoardButtonForm({ textContent }) {
  return (
    <>
      <BtnForm type="submit">      
      <ContainerSvg>
        <Svg width="14px" height="14px">
          <use href={sprite + '#icon-plus'}></use>
        </Svg>
      </ContainerSvg>
      <p>{textContent}</p>
      </BtnForm>
    </>
  );
}

export default NewBoardButtonForm;