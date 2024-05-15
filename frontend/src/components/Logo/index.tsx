import { LogoContainer, LogoImage, Title } from './styles';

import logo from '../../assets/images/logos/logo.svg';

interface LogoProps {
  colorTitle: string;
  position?: string;
}

export default function Logo({
  colorTitle,
  position = 'flex-start',
}: LogoProps) {
  return (
    <LogoContainer position={position}>
      <LogoImage src={logo} alt='sigin_backgroud_image' />
      <Title colorTitle={colorTitle} className='poppins-semibold'>
        VidFlex
      </Title>
    </LogoContainer>
  );
}
