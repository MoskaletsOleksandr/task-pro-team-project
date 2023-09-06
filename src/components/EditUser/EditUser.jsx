import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';

import { UpdateUserSchema } from '../../validation/authValidation';

import {
  GetCurrentUserThunk,
  UpdateUserPhotoThunk,
  UpdateUserThunk,
} from 'redux/auth/thunks';

import sprite from '../../images/sprite.svg';

import {
  Wrapper,
  AvatarWrapper,
  FileInputWrapper,
  IconUser,
  AvatarImg,
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
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = () => {
      dispatch(GetCurrentUserThunk());
    };

    fetchCurrentUser();
  }, [dispatch]);

  const userData = useSelector(state => state.auth.user);

  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [userName, setUserName] = useState(userData.name);
  const [userEmail, setUserEmail] = useState(userData.email);
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (userData.photo) {
      setImageUrl(userData.photo);
    }
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = event => {
        setImageUrl(event.target.result);
      };
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile, userData.photo]);

  const handleFileChange = event => {
    setImageFile(event.target.files[0]);
  };

  const formSubmit = e => {
    e.preventDefault();

    const {
      // name, email,
      password,
    } = e.target.elements;

    const newUserData = {
      name: userName,
      email: userEmail,
    };

    if (password.value) {
      newUserData.password = password.value;
    }
    // if (imageFile) {
    //   newUserData.photo = imageFile;
    // }

    dispatch(UpdateUserThunk({ userData: newUserData }));
    dispatch(UpdateUserPhotoThunk(imageFile));

    onClose();
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <Formik
          initialValues={{
            name: userName,
            email: userEmail,
            password: '',
          }}
          validationSchema={UpdateUserSchema}
        >
          <Wrapper>
            <AvatarWrapper>
              {!imageUrl && !userData.avatarURL ? (
                <IconUser>
                  <use href={`${sprite}#icon-avatar`}></use>
                </IconUser>
              ) : (
                <AvatarImg
                  src={imageUrl || userData.avatarURL}
                  alt="avatar"
                  width={68}
                  height={68}
                />
              )}

              <FileInputWrapper>
                <FileInput
                  type="file"
                  onChange={handleFileChange}
                  accept="image/jpeg, image/png, image/gif"
                />
                +
              </FileInputWrapper>
            </AvatarWrapper>

            <Inputs>
              <Field
                autoFocus
                name="name"
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
              <Field
                name="email"
                type="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
              />
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
