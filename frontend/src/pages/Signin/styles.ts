import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow: none;
`;

export const Tille = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 50px;

  gap: 70px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  gap: 40px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
