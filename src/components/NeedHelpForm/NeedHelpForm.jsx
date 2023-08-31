// import {  useDispatch } from 'react-redux';
import ButtonForForms from 'components/ButtonForForms/ButtonForForms';
import { Form, Input, Textarea, Title } from './NeedHelpForm.styled';
// import { SendLetterThunk } from 'redux/thunks';

const NeedHelpForm = () => {
  //   const dispatch = useDispatch();

  //   const email='helenblyzniuk@gmail.com'
  //   const text="need help"

  // dispatch(SendLetterThunk({email,text}))

  return (
    <>
      <Form>
        <Title>Need help</Title>

        <Input placeholder="Email address" />

        <Textarea placeholder="Comment"></Textarea>

        <ButtonForForms textButton={() => 'Send'} />
      </Form>
    </>
  );
};
export default NeedHelpForm;
