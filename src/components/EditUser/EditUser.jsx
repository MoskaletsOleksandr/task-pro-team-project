import { useState } from 'react';
import { Formik, Field } from 'formik';
import sprite from '../../images/sprite.svg';

import {
  Wrapper,
  AvatarWrapper,
  FileInputWrapper,
  IconUser,
  Inputs,
  FileInput,
  PasswordView,
  PasswordInput,
  PasswordIcon,
  Svg,
  SendBtn,
  ErrorText,
} from './EditUser.styled';

const EditUser = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const formSubmit = e => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <Formik
          initialValues={{
            name: 'userName',
            email: 'userEmail',
            password: '',
          }}
        >
          <Wrapper>
            <AvatarWrapper>
              <IconUser>
                <use href={`${sprite}#icon-avatar`}></use>
              </IconUser>

              <FileInputWrapper>
                <FileInput
                  type="file"
                  accept="image/jpeg, image/png, image/gif"
                />
                +
              </FileInputWrapper>
            </AvatarWrapper>

            <Inputs>
              <Field autoFocus name="name" type="text" />
              <Field name="email" type="email" />
              <PasswordInput>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <ErrorText name="password" component="div" />
                <PasswordView
                  className={`${PasswordView} ${PasswordIcon}`}
                  onClick={onPasswordVisible}
                >
                  {showPassword ? (
                    <PasswordIcon src={`${sprite}#icon-eye-hide`} />
                  ) : (
                    <Svg>
                      <use stroke="gray" href={`${sprite}#icon-eye`} />
                    </Svg>
                  )}
                </PasswordView>
              </PasswordInput>
            </Inputs>
            <SendBtn type="submit">Send</SendBtn>
          </Wrapper>
        </Formik>
      </form>
    </>
  );
};

export default EditUser;
