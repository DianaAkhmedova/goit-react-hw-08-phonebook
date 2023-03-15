import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

import { Btn } from 'shared/components/Button/Button.styled';
const UserMenu = () => {
  const { email } = useSelector(getUser);
  return (
    <div>
      <p>{email}</p>
      <Btn>Logout</Btn>
    </div>
  );
};

export default UserMenu;
