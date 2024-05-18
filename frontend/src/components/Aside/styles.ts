import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IContainerProps {
  menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
  menuIsOpen: boolean;
}

interface IMenuItemLinkProps {
  active: boolean;
}

export const Container = styled.aside<IContainerProps>`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.white};

  border-right: 1px solid #ebebeb;

  position: relative;

  padding-top: 20px;

  @media (max-width: 768px) {
    padding: 0;
    padding-left: 5px;
    position: fixed;
    z-index: 2;

    width: 100%;

    height: 100vh;
    overflow: hidden;

    height: ${(props) => (props.menuIsOpen ? '100vh' : '70px')};

    ${(props) =>
      !props.menuIsOpen
        ? css`
            transition: height 0.3s;
            border: none;
          `
        : css`
            transition: height 0.4s;
          `}
  }

  @media (max-width: 280px) {
    padding: 7px;
    position: fixed;
    z-index: 2;

    height: ${(props) => (props.menuIsOpen ? '100vh' : '70px')};
    overflow: hidden;

    ${(props) =>
      !props.menuIsOpen
        ? css`
            transition: height 0.3s;
            border: none;
          `
        : css`
            transition: height 0.4s;
          `}
  }
  @media (max-width: 280px) {
    padding: 7px;
    position: fixed;
    z-index: 2;

    height: ${(props) => (props.menuIsOpen ? '100vh' : '70px')};
    overflow: hidden;

    ${(props) =>
      !props.menuIsOpen
        ? css`
            transition: height 0.3s;
            border: none;
          `
        : css`
            transition: height 0.4s;
          `}
  }
`;
export const Header = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  span {
    color: ${(props) => props.theme.colors.black};
    font-size: 16px;
    font-weight: 500;

    margin-top: 20px;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    > img {
      width: 100px;
    }
  }
`;

export const ProfileImagem = styled.img`
  width: 72px;
  border-radius: 50px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 70px;

  gap: 30px;

  @media (max-width: 280px) {
    overflow: hidden;
  }
`;

export const MenuItemLink = styled(NavLink)<IMenuItemLinkProps>`
  color: ${(props) => props.theme.colors.gray};
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  position: relative;
  transition: opacity 0.3s;

  &.active {
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;

    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.primary};
      position: absolute;
      right: 0px;
      border-radius: 30px;
    }

    > svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};
    font-weight: bold;

    > svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
  > svg {
    font-size: 30px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    > svg {
      font-size: 25px;
      margin-right: 20px;
    }
  }
`;
export const MenuItemButton = styled.button`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};

  border: 0;
  background: none;

  margin: 7px 0;
  display: flex;
  align-items: center;

  transition: opacity 0.3s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  > svg {
    font-size: 30px;
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    > svg {
      font-size: 18px;
      margin-right: 15px;
    }
  }
`;

export const ToggleMenu = styled.button`
  width: 50px;
  height: 45px;

  border-radius: 10px;
  font-size: 22px;

  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  bottom: 30px;

  @media (max-width: 768px) {
    display: ${(props) => (props.menuIsOpen ? 'flex' : 'none')};
  }

  @media (max-width: 280px) {
    display: ${(props) => (props.menuIsOpen ? 'flex' : 'none')};
  }
`;
