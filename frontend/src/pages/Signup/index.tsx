import { ChangeEvent, FormEvent } from 'react';

import { LuLock, LuMail, LuUser } from 'react-icons/lu';

import Input from '../../components/Input';

import { Container, Content, Form } from './styles';
import ContentBackgroud from '../../components/ContentBackgroud';
import Logo from '../../components/Logo';
import { useTheme } from '../../hooks/theme';
import useWindowSize from '../../hooks/useWindowSize';
import Button from '../../components/Button';
import StarTitleAndRedirect from '../../components/StarTitleAndRedirect';
import { useFormContext } from '../../context/Form';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

function Signup() {
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const { state, dispatch, validation } = useFormContext();

  const handleChange = (
    name: keyof FormValues,
    value: string | ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: 'SET_VALUE', payload: { field: name, value } });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isValid = Object.values(validation).every((message) => !message);

  return (
    <Container>
      <ContentBackgroud />
      <Content>
        {width <= 768 && (
          <Logo colorTitle={theme.colors.black} position='center' />
        )}

        <StarTitleAndRedirect
          description='Já tem uma conta? '
          redirectTo='/'
          rediretoToText='Faça login'
          title='Vamos começar'
        />

        <Form onSubmit={handleSubmit}>
          <Input
            label='Nome'
            type='text'
            name='name'
            placeholder='Digite seu nome'
            icon={<LuUser size={30} />}
            validationRules={{ required: true, minLength: 3 }}
            value={state.name}
            onChange={(event) => handleChange('name', event)}
          />
          <Input
            label='Email'
            type='text'
            name='email'
            placeholder='Digite seu email'
            icon={<LuMail size={30} />}
            validationRules={{ email: true, required: true }}
            value={state.email}
            onChange={(event) => handleChange('email', event)}
          />
          <Input
            label='Senha'
            type='password'
            name='password'
            placeholder='Digite sua senha'
            icon={<LuLock size={30} />}
            iconRight={true}
            validationRules={{ password: true, required: true }}
            value={state.password}
            onChange={(event) => handleChange('password', event)}
          />
          <Input
            label='Confirmar senha'
            type='password'
            name='confirmPassword'
            placeholder='Digite sua senha'
            icon={<LuLock size={30} />}
            iconRight={true}
            validationRules={{ confirmPassword: true, required: true }}
            value={state.confirmPassword}
            onChange={(event) => handleChange('confirmPassword', event)}
          />
          <Button type='submit' disabled={!isValid}>
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Signup;
