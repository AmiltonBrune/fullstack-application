import api from '../services/api';

interface CategoryRegisterProps {
  title: string;
}

export async function getAllCategory() {
  const token = localStorage.getItem('@vidflex:token');
  return api({
    url: '/categories',
    method: 'get',
    headers: { Authorization: token },
  });
}

export async function registerCategory(data: CategoryRegisterProps) {
  const token = localStorage.getItem('@vidflex:token');
  return api({
    url: '/categories',
    method: 'post',
    headers: { Authorization: token },
    data,
  });
}
