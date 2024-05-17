import { ChangeEvent, FormEvent } from 'react';

import { LuLock, LuMail } from 'react-icons/lu';

import Input from '../../components/Input';

import { Container, Content, Tille, Form } from './styles';
import ContentBackgroud from '../../components/ContentBackgroud';
import Logo from '../../components/Logo';
import { useTheme } from '../../hooks/theme';
import useWindowSize from '../../hooks/useWindowSize';
import Button from '../../components/Button';
import StarTitleAndRedirect from '../../components/StarTitleAndRedirect';
import { useFormContext } from '../../context/Form';
import { DefineFieldProps } from '../../hooks/useValidation';

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  email: string;
  password: string;
}

function Signin() {
  const { signIn } = useAuth();

  const { theme } = useTheme();
  const { width } = useWindowSize();
  const navigate = useNavigate();

  const { state, dispatch, validation } = useFormContext();

  const handleChange = (
    name: keyof FormValues,
    value: string | ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: 'SET_VALUE', payload: { field: name, value } });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn({
      email: state.email,
      password: state.password,
    }).then(() => {
      dispatch({
        type: 'SET_INITIAL_VALUES',
        payload: {
          field: 'email',
          value: '',
        },
      });
      navigate('/');
    });
  };

  const isValid = Object.values(validation).every((message) => !message);

  const validFields: DefineFieldProps = {
    email: true,
    password: true,
  };

  return (
    <Container>
      <ContentBackgroud />
      <Content>
        {width <= 768 && (
          <Logo
            colorTitle={theme.colors.black}
            position='center'
            isRed={true}
          />
        )}

        <Tille>
          <StarTitleAndRedirect
            description='Não tem uma conta? '
            redirectTo='/register'
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
            value={state.email}
            onChange={(event) => handleChange('email', event)}
            validFields={validFields}
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
            validFields={validFields}
          />
          <Button type='submit' disabled={!isValid}>
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Signin;
