import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 14px;
`;

export const UserName = styled.div`
  color: var(--header-name-color);
`;

export const AvasarSetin = styled.div`
  position: relative;
  cursor: pointer;
`;

export const IconAvatar = styled.svg`
  width: 32px;
  height: 32px;
  border: 1px solid var(--header-theme-select-border-color);
  border-radius: 8px;
  fill: var(--header-user-fill);
  stroke: var(--header-user-stroke);
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid var(--header-theme-select-text-color-hover);
    transform: scale(1.1);
  }
`;

export const AvatarImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid var(--header-theme-select-text-color-hover);
    transform: scale(1.1);
  }
`;

export const Name = styled.p`
  font-weight: medium;
`;
