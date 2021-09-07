import { Switch } from 'react-router-dom';
// import './App.css';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
// import HomePage from 'pages/HomePage';
// import LoginPage from 'pages/LoginPage';
// import ContactsPage from 'pages/ContactsPage';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

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

        <Suspense fallback={<p>Loading...</p>}>
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
