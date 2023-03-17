import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { UserRoutes } from 'UserRoutes';

import { current } from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <UserRoutes />;
};

export default App;
