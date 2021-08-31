//import { useContext } from 'react';

import { useAuth }from '../provider/auth'

export const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}