import {  useDispatch } from 'react-redux';
import ButtonForForms from 'components/ButtonForForms/ButtonForForms';
import { Form, Input, Textarea, Title } from './NeedHelpForm.styled';
import { useState } from 'react';
import { SendLetterThunk } from 'redux/auth/thunks';

const NeedHelpForm = () => {
  //   const dispatch = useDispatch();

  //   const email='helenblyzniuk@gmail.com'
  //   const text="need help"

  // dispatch(SendLetterThunk({email,text}))

  const [emailValue, setEmailValueValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();

  const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(emailValue)) {
      dispatch(
        SendLetterThunk({
          email: emailValue,
          comment: descriptionValue,
        })
      );
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  return (
    <>
      <Form action=''>
        <Title>Need help</Title>

        <Input 
          type="text"
          action=""
          placeholder="Email address"
          value={emailValue}
          onChange={event => setEmailValueValue(event.target.value)} />

        {emailError && <p>{emailError}</p>}

        <Textarea 
          type="text"
          action=""
          placeholder="Comment"
          value={descriptionValue}
          onChange={event => setDescriptionValue(event.target.value)}>
        </Textarea>

        <ButtonForForms type="submit" onSubmit={handleSubmit} textButton={() => 'Send'} />
      </Form>
    </>
  );
};
export default NeedHelpForm;
