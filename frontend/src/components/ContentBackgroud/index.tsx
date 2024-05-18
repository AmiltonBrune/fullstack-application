import Logo from '../Logo';

import { Container, ImageBackgroud, ImageBackgroudContainer } from './styles';

import imageBackgroud from '../../assets/images/svgs/login_image.svg';
import { useTheme } from '../../hooks/theme';

function ContentBackgroud() {
  const { theme } = useTheme();
  return (
    <Container>
      <Logo colorTitle={theme.colors.white} />
      <ImageBackgroudContainer>
        <ImageBackgroud src={imageBackgroud} alt='sigin_backgroud_image' />
      </ImageBackgroudContainer>
    </Container>
  );
}

export default ContentBackgroud;
