import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
`;

export const IconUser = styled.svg`
  width: 68px;
  height: 68px;
  border-radius: 10px;
  fill: #1f1f1f;
  stroke: rgba(21, 21, 21, 1);
`;

export const AvatarImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 10px;
`;

export const FileInputWrapper = styled.label`
  position: absolute;
  bottom: -12px;
  left: 50%;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transform: translateX(-50%);
  color: #161616;
  border-radius: 20%;
  background-color: #bedbb0;
  font-size: 18px;
  font-size: 14px;
  &:hover {
    background-color: #9dc888;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  gap: 14px;

  input {
    top: 107px;
    left: 40px;
    height: 49px;
    padding-left: 18px;
    opacity: 0.4;
    color: #ffffff;
    border: 1px solid #bedbb0;
    border-radius: 8px;
    outline: none;
    background: #1f1f1f;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  }
`;

export const PasswordInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const PasswordView = styled.span`
  position: absolute;
  right: 18px;
  top: 19px;
  cursor: pointer;
`;

export const PasswordIcon = styled.svg`
  top: 50%;
  right: 4px;
  width: 18px;
  height: 18px;
`;

export const Svg = styled.svg`
  top: 50%;
  right: 4px;
  width: 18px;
  height: 18px;
`;

export const SendBtn = styled.button`
  width: 100%;
  height: 49px;
  margin-top: 24px;
  cursor: pointer;
  text-align: center;
  letter-spacing: -0.02em;
  color: #161616;
  border: none;
  border-radius: 8px;
  background: #bedbb0;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 21px;

  &:hover,
  &:focus,
  &:active {
    background: #a1cf89;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: #bedbb070;
  font-size: 14px;
`;
