// import { useDispatch } from 'react-redux';
import ButtonForForms from 'components/ButtonForForms/ButtonForForms';
import { Form, Input, Textarea, Title } from './NeedHelpForm.styled';

const NeedHelpForm = () => {
  // const dispatch = useDispatch();
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
