import { createContext, useState, useContext, ReactNode } from 'react';

import { login, logout, getUserData, confirmMail, register } from '../server';
import { useModal } from './modal';

interface IAuthContext {
  logged: boolean;
  user: any;
  isVerify: any;
  signIn(props: SigninProps): Promise<void>;
  signup(props: SignupProps): Promise<void>;
  signOut(): Promise<void>;
  getUser(): void;
  getLocalUser(): any;
  confirmationRegisterUser(props: ConfirmationRegisterUserProps): Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface SigninProps {
  email: string;
  password: string;
}
interface SignupProps {
  email: string;
  password: string;
}

interface ConfirmationRegisterUserProps {
  code: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('@vidflex:logged');

    return !!isLogged;
  });
  const [user, setUser] = useState<any>({});
  const [isVerify, setIsVerify] = useState(false);
  const { setIsShowinLoading } = useModal();

  const signIn = async ({ email, password }: SigninProps): Promise<void> => {
    try {
      const result = await login({ email, password });

      localStorage.setItem('@vidflex:token', result.data.data.token);
      localStorage.setItem('@vidflex:logged', 'true');

      await getUser();
    } catch (error) {
      setIsShowinLoading(false);
      setLogged(false);
      alert('Senha ou email inválido!');
    }
  };

  const signup = async ({ email, password }: SignupProps) => {
    try {
      await register({ email, password });
    } catch (error) {
      alert('Erro ao cadastrar usuário/usuário já cadastrado');
    }
  };

  const signOut = async () => {
    try {
      const token = localStorage.getItem('@vidflex:token');
      await logout({ token });
      localStorage.removeItem('@vidflex:logged');
      localStorage.removeItem('@vidflex:token');
      window.location.href = '/';
      setLogged(false);
    } catch (error) {
      setLogged(false);
      localStorage.removeItem('@vidflex:logged');
      localStorage.removeItem('@vidflex:token');
    }
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem('@vidflex:token');
      const data = await getUserData({ token });

      // if (!data.data.data.user.is_confirmed) {
      //   localStorage.removeItem('@vidflex:logged');
      //   localStorage.removeItem('@vidflex:token');

      //   alert('Acesse seu email e clique no link para ativar seu acesso');

      //   setLogged(false);
      // }

      localStorage.setItem(
        '@vidflex:user',
        JSON.stringify(data.data.data.user)
      );
      setLogged(true);
    } catch (error) {
      setUser({});
    }
  };

  const getLocalUser = () => {
    const dataUser = localStorage.getItem('@vidflex:user');

    if (dataUser) return JSON.parse(dataUser);

    return {};
  };
  const confirmationRegisterUser = async ({
    code,
  }: ConfirmationRegisterUserProps) => {
    try {
      await confirmMail({ code });
      setIsVerify(true);
    } catch (error) {
      setIsVerify(false);
      alert('Erro ao verificar usuário');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logged,
        signIn,
        signOut,
        getUser,
        getLocalUser,
        user,
        confirmationRegisterUser,
        isVerify,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
