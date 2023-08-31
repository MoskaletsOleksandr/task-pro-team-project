import ImgModal from "./ImgModal";
import InputModal from "./InputModal";
import LabelModal from "./LabelModal";


const RadioImgModal = (props) => {
    return (
      <LabelModal marginBottom='0px'>
        <InputModal type='radio'
            name='background' display='none'/>
        <ImgModal/>
      </LabelModal>
    );
  }

  export default RadioImgModal;