import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-size: 30px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
`;

export const TextRedirect = styled.span`
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
`;
