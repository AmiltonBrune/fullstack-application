// @ts-nocheck

import styled from 'styled-components';

interface ContentProps {
  width?: string;
  height?: string;
}

interface FooterContainerProps {
  justifyContent?: string;
  btnWidth?: string;
}

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Backgroud = styled.div`
  background-color: rgba(130, 135, 146, 0.56);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Content = styled.div<ContentProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  z-index: 10;
  border-radius: 10px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-weight: 400;
  font-size: 18px;
  text-align: left;
`;

export const Header = styled.div`
  padding: 20px;
`;

export const Body = styled.div`
  padding: 10px;
  color: ${(props) => props.theme.colors.black};
  height: 100%;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const FooterContainer = styled.div<FooterContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'right'};
  align-items: center;
  gap: 20px;
  padding: 20px;

  > button {
    font-size: 14px;
    width: ${(props) => (props.btnWidth ? props.btnWidth : '150px')};
    height: 50px;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 20px;
  border: none;
  font-size: 22px;
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.white};
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  border-radius: 10px;

  &:hover {
    opacity: 0.5;
    transition: all 0.25s ease;
  }
`;
