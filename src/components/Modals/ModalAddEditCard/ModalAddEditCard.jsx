import { Modal } from 'components/common/Modal';

import ButtonCloseModal from '../ModalsCommon/ButtonCloseModal';
import { Formik, Form } from 'formik';
import TitleModal from '../ModalsCommon/TitleModal';
import LabelModal from '../ModalsCommon/LabelModal';
import InputModal from '../ModalsCommon/InputModal';
import TextareaModal from '../ModalsCommon/TextareaModal';
import ImgModal from '../ModalsCommon/ImgModal';
import WrapperComponentModal from '../ModalsCommon/WrapperComponentModal';
import ButtonPlusModal from '../ModalsCommon/ButtonPlusModal';
import { Calendar } from '../ModalsCommon/Calendar/Calendar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectAllBoards } from 'redux/dashboards/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentBoardThunk } from 'redux/dashboards/thunks';

const ModalAddEditCard = ({ closeModal, nameButton }) => {
  // const [visible, setVisible] = useState(false);

  const radioButtons = [
    { priority: 'low', color: '#8FA1D0' },
    { priority: 'medium', color: '#E09CB5' },
    { priority: 'high', color: '#BEDBB0' },
    { priority: 'without', color: 'rgba(255, 255, 255, 0.3)' },
  ];

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('without');
  const [deadline, setDeadline] = useState('');

  const dispatch = useDispatch()
  const selector = useSelector(selectAllBoards)
dispatch(getCurrentBoardThunk)

console.log(dispatch(getCurrentBoardThunk));
  
  console.log(selector);
  // useEffect(() => {
  //   if(nameButton === 'edit') {
  //     setVisible(true);
  //   }
  // }, [nameButton]);

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
    if (!title) {
      alert('Enter title');
      return;
    } else if (!text) {
      alert('Enter Description');
      return;
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
        <ButtonCloseModal onClick={closeModal} />
        <Formik>
          <Form autoComplete="off">
            <TitleModal>Add card</TitleModal>
            <LabelModal>
              <InputModal
                onChange={handleChangeTitle}
                value={title}
                type="text"
                name="modalAddEditCardTitle"
                // pattern={pattern}
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
                // pattern={pattern}
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
                  <LabelModal marginBottom="0px">
                    <InputModal
                      onChange={onChangeColor}
                      checked={priority === { priority } ? true : false}
                      type="radio"
                      name="labelColor"
                      value={priority}
                      display="none"
                      aria-label = {priority}
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
            <Calendar deadline={setDeadline} />
            <ButtonPlusModal
              onClick={handleSubmit}
              name="addCard"
              type="submit"              
            >
              Add
            </ButtonPlusModal>
          </Form>
        </Formik>
      </>
    </Modal>
  );
};

export default ModalAddEditCard;
