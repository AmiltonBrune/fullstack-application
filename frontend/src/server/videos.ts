import api from '../services/api';

interface VideoRegisterProps {
  title: string;
  description: string;
  url: string;
  image_id: string;
  categories: string[];
}

export async function getAllVideos() {
  const token = localStorage.getItem('@vidflex:token');
  return api({
    url: '/videos',
    method: 'get',
    headers: { Authorization: token },
  });
}

export async function registerVideo(data: VideoRegisterProps) {
  const token = localStorage.getItem('@vidflex:token');
  return api({
    url: '/videos',
    method: 'post',
    headers: { Authorization: token },
    data,
  });
}
