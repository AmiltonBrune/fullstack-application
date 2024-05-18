import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  overflow: none;
  position: fixed;
`;

export const Tille = styled.h1`
  font-size: 30;
  color: ${(props) => props.theme.colors.black};
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 70%;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: none;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  gap: 40px;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
