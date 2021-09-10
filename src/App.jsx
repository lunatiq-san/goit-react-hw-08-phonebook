import { Switch } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

import './index.css';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName "home-page" */),
);
const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName "register-page" */),
);
const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName "login-page" */),
);
const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName "contacts-page" */),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#8c91b3"
              height={50}
              width={50}
              timeout={3000} //3 secs
            />
          }
        >
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}

export default App;
