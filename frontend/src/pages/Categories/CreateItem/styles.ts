import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  padding: 0 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  > button {
    font-size: 14px;
    width: 200px;
  }

  > div {
    width: 100%;
  }
`;
