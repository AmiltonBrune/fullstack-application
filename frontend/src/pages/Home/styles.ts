import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  > div {
    @media (max-width: 768px) {
      width: 90%;
    }
    width: 45%;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img``;
