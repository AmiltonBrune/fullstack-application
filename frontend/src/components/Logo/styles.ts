import styled from 'styled-components';

interface LogoContainerProps {
  position: string;
}

interface TitleProps {
  colorTitle: string;
}

export const LogoContainer = styled.div<LogoContainerProps>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.position};
  align-items: center;
  gap: 20px;
`;

export const Title = styled.span<TitleProps>`
  font-size: 36px;
  color: ${(props) => props.colorTitle};
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;
