import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
`;

export const AvasarSetin = styled.div`
  position: relative;
  cursor: pointer;
`;

export const IconAvatar = styled.svg`
  width: 32px;
  height: 32px;
  border: 1px solid #bedbb0;
  border-radius: 5px;
  fill: #1f1f1f;
  stroke: rgba(21, 21, 21, 1);
  /* &:hover {
    box-shadow: 0px 6px 7px 1px #9dc888;
  } */
`;

export const IconPlus = styled.svg`
  position: absolute;
  width: 12px;
  height: 12px;
  fill: #bedbb0;
  stroke: #121212;
  top: 27px;
  left: 10px;
`;

export const AvatarImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  /* &:hover {
    box-shadow: 0px 6px 7px 1px #9dc888;
  } */
`;
