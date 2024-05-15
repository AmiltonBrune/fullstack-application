import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 60px;

  margin: 7px 0;
  padding: 10px;

  border-radius: 10px;

  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
