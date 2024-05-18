import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 83%;
  height: 300px;
  padding: 150px 50px 0 50px;
`;

export const Card = styled.div`
  flex: 0 0 auto;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
`;
