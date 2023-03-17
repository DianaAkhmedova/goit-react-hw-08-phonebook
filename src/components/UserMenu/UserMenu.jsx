import { useSelector, useDispatch } from 'react-redux';

import Button from 'shared/components/Button/Button';

import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

import { UserContainer, StyledEmail } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  const { email } = useSelector(getUser);
  return (
    <UserContainer>
      <StyledEmail>{email}</StyledEmail>
      <Button onClick={onLogout}>Logout</Button>
    </UserContainer>
  );
};

export default UserMenu;
