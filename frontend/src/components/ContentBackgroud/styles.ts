import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.tertiary};
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px;

  border: none;

  @media (max-width: 768px) {
    display: none;
  }
`;


export const ImageBackgroudContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageBackgroud = styled.img`
  width: 50%;
`;
