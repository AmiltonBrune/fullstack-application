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

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
