import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';
import Loader from 'shared/components/Loader/Loader';

import {
  Header,
  Main,
  Section,
  Container,
  Img,
  Wrapper,
} from './Layout.styled';

import neonImg from '../../images/neon-phone.jpeg';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navbar />
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Section>
            <Container>
              <Wrapper>
                <Img src={`${neonImg}`} alt="Neon phonebook" />
                <Outlet />
              </Wrapper>
            </Container>
          </Section>
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
