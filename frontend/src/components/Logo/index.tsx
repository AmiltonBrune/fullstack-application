import { LogoContainer, LogoImage, Title } from './styles';

import logo from '../../assets/images/logos/logo.svg';
import logo_red from '../../assets/images/logos/logo_red.svg';

interface LogoProps {
  colorTitle: string;
  position?: string;
  isRed?: boolean;
}

export default function Logo({
  colorTitle,
  position = 'flex-start',
  isRed = false,
}: LogoProps) {
  return (
    <LogoContainer position={position}>
      {isRed ? (
        <LogoImage src={logo_red} alt='logo' />
      ) : (
        <LogoImage src={logo} alt='logo' />
      )}

      <Title colorTitle={colorTitle} className='poppins-semibold'>
        VidFlex
      </Title>
    </LogoContainer>
  );
}
