import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, ContentBackgroud, TextContainer } from './styles';
import confirmation_backgroud_image from '../../assets/images/svgs/confirmation.svg';
import access_denied from '../../assets/images/svgs/access_denied.svg';

import { useAuth } from '../../hooks/auth';

function ActivateAccount() {
  const { code } = useParams();
  const { confirmationRegisterUser, isVerify } = useAuth();

  async function confirmationRegister() {
    if (code) await confirmationRegisterUser({ code });
  }

  useEffect(() => {
    confirmationRegister();
  }, []);

  return (
    <Container>
      <ContentBackgroud>
        <p>{isVerify}</p>
        {isVerify ? (
          <>
            <TextContainer>
              <span>Seu cadaastro foi confirmado com sucesso!</span>
            </TextContainer>
            <img
              src={confirmation_backgroud_image}
              alt='confirmation_backgroud_image'
            />
          </>
        ) : (
          <>
            <TextContainer>
              <span>Email já verificado ou link expirado!</span>
            </TextContainer>
            <img src={access_denied} alt='access_denied' />
          </>
        )}
      </ContentBackgroud>
    </Container>
  );
}

export default ActivateAccount;
