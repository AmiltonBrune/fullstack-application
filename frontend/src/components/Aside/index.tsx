import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';

import { BiSolidCameraHome } from 'react-icons/bi';
import { BsCameraReels, BsListUl } from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';

import {
  Container,
  Header,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter,
} from './styles';
import Logo from '../Logo';
import { useAuth } from '../../hooks/auth';

const Aside = () => {
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const { signOut } = useAuth();

  const location = useLocation();

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <Logo colorTitle={'#222'} position='center' isRed={true} />
      </Header>
      <MenuContainer>
        <MenuItemLink to='/' active={location.pathname === '/' ? true : false}>
          <BiSolidCameraHome />
          Home
        </MenuItemLink>
        <MenuItemLink
          to='/videos'
          active={location.pathname === '/' ? true : false}
        >
          <BsCameraReels />
          Videos
        </MenuItemLink>
        <MenuItemLink
          to='/categories'
          active={location.pathname === '/' ? true : false}
        >
          <BsListUl />
          Categorias
        </MenuItemLink>
      </MenuContainer>
      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <MenuItemButton onClick={signOut}>
          <RxExit />
          Sair
        </MenuItemButton>
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
