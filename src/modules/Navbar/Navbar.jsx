import Auth from 'modules/Auth/Auth';

import { Wrapper, PageNav, Icon, NavList, Item, Link } from './Navbar.styled';

const Navbar = () => {
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
          <Item>
            <Link to={'/contacts'}>Contacts</Link>
          </Item>
        </NavList>
      </PageNav>
      <Auth />
    </Wrapper>
  );
};

export default Navbar;
