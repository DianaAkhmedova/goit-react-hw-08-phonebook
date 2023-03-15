import { useSelector } from 'react-redux';

import Auth from 'components/Auth/Auth';
import UserMenu from '../UserMenu/UserMenu';

import { isUserLogin } from 'redux/auth/auth-selectors';

import { Wrapper, PageNav, Icon, NavList, Item, Link } from './Navbar.styled';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <Wrapper>
      <PageNav>
        <Link to={'/'}>
          <Icon />
        </Link>
        <NavList>
          <Item>
            <Link to={'/'}>Home page</Link>
          </Item>
          {isLogin && (
            <Item>
              <Link to={'/contacts'}>My contacts</Link>
            </Item>
          )}
        </NavList>
      </PageNav>
      {isLogin ? <UserMenu /> : <Auth />}
    </Wrapper>
  );
};

export default Navbar;
