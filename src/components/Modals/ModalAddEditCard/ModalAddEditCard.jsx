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
import { useDispatch, useSelector } from 'react-redux';
import {
  createNewTaskThunk,
  updateTaskByIdThunk,
} from 'redux/dashboards/thunks';
import { toast } from 'react-hot-toast';

const ModalAddEditCard = ({
  closeModal,
  nameButton,
  columnId,
  idEditTask,
  titleEditTask,
  textEditTask,
  priorityEditTask,
}) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const boardId = useSelector(state => state.boards.currentBoard._id);

  useEffect(() => {
    if (nameButton === 'editCard') {
      setVisible(true);
    }
  }, [nameButton]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('without');
  const [deadline, setDeadline] = useState('');

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

  const handleSubmitAdd = async e => {
    e.preventDefault();
    if (title.trim() === '') {
      toast.error('Enter title');
      return;
    } else if (text.trim() === '') {
      toast.error('Enter Description');
      return;
    } else if (!deadline) {
      toast.error('Select date');
      return;
    } else {
      try {
        await dispatch(
          createNewTaskThunk({
            title,
            text,
            priority,
            deadline,
            boardId,
            columnId,
          })
        )
          .unwrap()
          .then(async res => {
            await res;
            toast.success(`Card added`);
            reset();
            closeModal();
            return;
          });
      } catch (error) {
        toast.error('Failed to add card');
      }
    }
  };

  const handleSubmitEdit = async e => {
    e.preventDefault();
    if (title.trim() === '') {
      toast.error('Enter title');
      return;
    } else if (text.trim() === '') {
      toast.error('Enter Description');
      return;
    } else if (!deadline) {
      toast.error('Select date');
      return;
    } else {
      try {
        await dispatch(
          updateTaskByIdThunk({
            idTask: idEditTask,
            body: { title, text, priority, deadline, boardId, columnId },
          })
        )
          .unwrap()
          .then(async res => {
            await res;
            toast.success(`Card edit`);
            reset();
            closeModal();
            return;
          });
      } catch (error) {
        toast.error('Failed to edit');
      }
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
              >                
              </TextareaModal>
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
                      checked={
                        !visible
                          ? priority === { priority }
                            ? true
                            : false
                          : priorityEditTask
                      }
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
              onClick={!visible ? handleSubmitAdd : handleSubmitEdit}
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
