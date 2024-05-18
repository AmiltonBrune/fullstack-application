import api from '../services/api';

interface GetUserProps {
  token: string | null;
}

interface RegisterProps {
  email: string;
  password: string;
}

interface ConfirmMailProps {
  code: string;
}

export async function getUserData({ token }: GetUserProps) {
  return api({
    url: '/users',
    method: 'get',
    headers: { Authorization: token },
  });
}

export async function register({ email, password }: RegisterProps) {
  return api.post('/users', { email, password });
}

export async function confirmMail({ code }: ConfirmMailProps) {
  return api.get(`/users/confirm/${code}`);
}
