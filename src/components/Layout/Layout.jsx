import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

import Loader from 'shared/components/Loader/Loader';

import { Header, Main, Section, Container } from './Layout.styled';

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
              <Outlet />
            </Container>
          </Section>
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
