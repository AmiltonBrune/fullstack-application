import { Container, UserName, ProfileImage } from './styles';

import user_image from '../../assets/images/svgs/user.svg';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';

const MainHeader = () => {
  const { getLocalUser } = useAuth();
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const data = getLocalUser();

    setUser(data);
  }, []);

  return (
    <Container>
      {user && <UserName className='poppins-regular'>{user?.email}</UserName>}
      <ProfileImage src={user_image} />
    </Container>
  );
};

export default MainHeader;
