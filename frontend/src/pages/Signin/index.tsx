import { useState, ChangeEvent, FormEvent } from 'react';

import { LuLock, LuMail } from 'react-icons/lu';

// import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';

import { Container, Content, Tille, Form } from './styles';
import ContentBackgroud from '../../components/ContentBackgroud';
import Logo from '../../components/Logo';
import { useTheme } from '../../hooks/theme';
import useWindowSize from '../../hooks/useWindowSize';
import Button from '../../components/Button';
import StarTitleAndRedirect from '../../components/StarTitleAndRedirect';

// import logo_image from 'assets/svgs/logo.svg';
// import sigin_backgroud_image from 'assets/svgs/sigin_backgroud_image.svg';

interface FormValues {
  email: string;
  password: string;
}

function Signin() {
  const [values, setValues] = useState<FormValues>({ email: '', password: '' });
  const { theme } = useTheme();
  const { width } = useWindowSize();

  //   const navigate = useNavigate();

  const handleChange = (
    name: keyof FormValues,
    value: string | ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Email:', values.email);
    console.log('Password:', values.password);
  };
  return (
    <Container>
      <ContentBackgroud />
      <Content>
        {width <= 768 && (
          <Logo colorTitle={theme.colors.black} position='center' />
        )}

        <Tille>
          <StarTitleAndRedirect
            description='Não tem uma conta? '
            redirectTo='#'
            rediretoToText='cadastre-se'
            title='Vamos começar'
          />
        </Tille>
        <Form onSubmit={handleSubmit}>
          <Input
            label='Email'
            type='text'
            name='email'
            placeholder='Digite seu email'
            icon={<LuMail size={30} />}
            validationRules={{ email: true, required: true }}
            value={values.email}
            onChange={(value) => handleChange('email', value)}
          />
          <Input
            label='Senha'
            type='password'
            name='password'
            placeholder='Digite sua senha'
            icon={<LuLock size={30} />}
            iconRight={true}
            validationRules={{ password: true, required: true }}
            value={values.password}
            onChange={(value) => handleChange('password', value)}
          />
          <Button type='submit'>Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Signin;
