import { useNavigate } from 'react-router-dom';

import { Container, Description, TextRedirect, Title } from './styles';

interface StarTitleAndRedirectProps {
  redirectTo: string;
  title: string;
  description: string;
  rediretoToText: string;
}

const StarTitleAndRedirect = ({
  redirectTo,
  description,
  rediretoToText,
  title,
}: StarTitleAndRedirectProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(redirectTo);
  };

  return (
    <Container>
      <Title className='poppins-semibold'>{title}</Title>
      <Description className='poppins-light'>
        {description}
        <TextRedirect onClick={handleOnClick}>{rediretoToText}</TextRedirect>
      </Description>
    </Container>
  );
};

export default StarTitleAndRedirect;
