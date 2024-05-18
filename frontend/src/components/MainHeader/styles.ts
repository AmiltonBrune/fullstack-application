import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 20px;
  gap: 30px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const UserName = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
`;
