import { ButtonForm } from './ButtonForForms.styled';

function ButtonForForms ({ textButton }) {
  return (
    <>
      <ButtonForm type="submit"> {textButton()}
      </ButtonForm>
    </>
  );
}

export default ButtonForForms;