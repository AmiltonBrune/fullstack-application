import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
  overflow: none;

  background: linear-gradient(
    to right,
    rgb(231, 76, 60),
    rgb(192, 57, 43),
    rgb(183, 28, 28)
  );  
`;

export const ContentBackgroud = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  gap: 50px;

  border: none;

  > img {
    width: 50%;
    height: 50%;
  }
`;

export const TextContainer = styled.div`
  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 24px;
    font-weight: 400;
  }
`;
