import PropTypes from 'prop-types';
import { ContainerSvg, Svg } from './ChildButtonNewBoard.styled';
import sprite from '../../images/sprite.svg';

export default function ChildButtonNewBoard({ textContent }) {
  return (
    <>     
      <ContainerSvg>
        <Svg width="14px" height="14px">
          <use href={sprite + '#icon-plus'}></use>
        </Svg>
      </ContainerSvg>

      <p>{textContent}</p>
    </>
  );
}

ChildButtonNewBoard.propTypes = {
  textContent: PropTypes.string.isRequired,
};
