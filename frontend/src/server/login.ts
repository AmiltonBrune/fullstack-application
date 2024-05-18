import api from '../services/api';

interface SigninProps {
  email: string;
  password: string;
}

interface LogoutProps {
  token: string | null;
}

export async function login({ email, password }: SigninProps) {
  return api.post('/users/login', { email, password });
}

export async function logout({ token }: LogoutProps) {
  return api({
    url: '/users/logout',
    method: 'put',
    headers: { Authorization: token },
  });
}
