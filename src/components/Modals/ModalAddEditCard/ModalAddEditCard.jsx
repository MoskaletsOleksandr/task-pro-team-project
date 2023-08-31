import { Modal } from 'components/common/Modal';
import sprite from '../../../images/sprite.svg';
import { Formik, Form } from 'formik';
import TitleModal from '../ModalsCommon/TitleModal';
import LabelModal from '../ModalsCommon/LabelModal';
import InputModal from '../ModalsCommon/InputModal';
import TextareaModal from '../ModalsCommon/TextareaModal';
import ImgModal from '../ModalsCommon/ImgModal';
import WrapperComponentModal from '../ModalsCommon/WrapperComponentModal';
import ButtonPlusModal from '../ModalsCommon/ButtonPlusModal';
import { Calendar } from '../ModalsCommon/Calendar/Calendar';
import { useEffect, useState } from 'react';
import { CloseButton, CloseSVG } from 'components/Modal/Modal.styled';
import { radioButtons } from './radioBattons';

const ModalAddEditCard = ({ closeModal, nameButton }) => {
  const [visible, setVisible] = useState(false);

  //   ------------ Підключення модалки ---------------
  //   ================================================

  // 1. Перенести в компонент, в якому підключається модалка
  //   const [showModal, setShowModal] = useState(false);
  //   const [nameButton, setNameButton] = useState('');

  //   const openModal = (e) => {
  //     setNameButton(e.target.name);
  //     setShowModal(true);
  //   }

  // const closeModal = () => {
  //   setShowModal(false);
  // }

  // 2. В nameButton === 'edit' в useEffect, має бути name однієї з кнопок, що відкриває модалку

  
  useEffect(() => {
    if (nameButton === 'edit') {
      setVisible(true);
    }
  }, [nameButton]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('without');
  const [deadline, setDeadline] = useState('');

  // const dispatch = useDispatch()
  // const selector = useSelector(selectAllBoards)

  const handleChangeTitle = e => {
    const { value } = e.currentTarget;

    setTitle(value);
  };

  const handleChangeDescription = e => {
    const { value } = e.currentTarget;

    setText(value);
  };

  const onChangeColor = e => {
    setPriority(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Enter title');
      return;
    } else if (text.trim() === '') {
      alert('Enter Description');
      return;
    } else if (!deadline) {
      alert('Select date');
    } else {
      console.log(title);
      console.log(text);
      console.log(priority);
      console.log(deadline);
      reset();
    }
  };

  const reset = () => {
    setTitle('');
    setText('');
    setDeadline('');
  };

  return (
    <Modal width="350px" height="522px" onClose={closeModal}>
      <>
        <CloseButton onClick={closeModal}>
          <CloseSVG>
            <use href={sprite + '#icon-x-close'}></use>
          </CloseSVG>
        </CloseButton>
        <Formik>
          <Form autoComplete="off">
            <TitleModal>{!visible ? 'Add card' : 'Edit card'}</TitleModal>
            <LabelModal>
              <InputModal
                onChange={handleChangeTitle}
                value={title}
                type="text"
                name="modalAddEditCardTitle"
                title="Enter title"
                required
                placeholder="Title"
              />
            </LabelModal>
            <LabelModal>
              <TextareaModal
                onChange={handleChangeDescription}
                value={text}
                type="text"
                name="modalDescription"
                title="Enter title"
                required
                placeholder="Comment"
                maxWidth="302px"
                height="154px"
              />
            </LabelModal>
            <TitleModal
              fontSize="12px"
              marginBottom="4px"
              color="var(--modal-secondary-text-color)"
            >
              Label color
            </TitleModal>
            <WrapperComponentModal
              marginBottom="14px"
              gap="8px"
              maxWidth="252px"
              justifyContent="start"
            >
              {radioButtons.map(({ priority, color }) => {
                return (
                  <LabelModal key={priority} marginBottom="0px">
                    <InputModal
                      onChange={onChangeColor}
                      checked={priority === { priority } ? true : false}
                      type="radio"
                      name="labelColor"
                      value={priority}
                      display="none"
                      aria-label={priority}
                    />
                    <ImgModal
                      width="14px"
                      height="14px"
                      backgroundColor={color}
                      border="transparent"
                      borderRadius="50%"
                    />
                  </LabelModal>
                );
              })}
            </WrapperComponentModal>
            <TitleModal
              fontSize="12px"
              marginBottom="4px"
              color="var(--modal-secondary-text-color)"
            >
              Deadline
            </TitleModal>
            <WrapperComponentModal marginBottom="0px">
              {!deadline && (
                <TitleModal
                  marginBottom="0px"
                  fontSize="14px"
                  fontWeight="500"
                  color="var(--modal-date-text-color)"
                >
                  Today,
                </TitleModal>
              )}
              <Calendar deadline={setDeadline} />
            </WrapperComponentModal>
            <ButtonPlusModal
              onClick={handleSubmit}
              name="addCard"
              type="submit"
              marginTop="40px"
            >
              {!visible ? 'Add' : 'Edit'}
            </ButtonPlusModal>
          </Form>
        </Formik>
      </>
    </Modal>
  );
};

export default ModalAddEditCard;
