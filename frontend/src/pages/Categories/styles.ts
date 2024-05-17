import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  padding: 100px;

  color: ${(props) => props.theme.colors.black};
`;
