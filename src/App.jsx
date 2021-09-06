// import Container from 'components/Container';
// import ContactForm from 'components/ContactForm';
// import ContactList from 'components/ContactList';
// import Filter from 'components/Filter';

// function App() {
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </Container>
//   );
// }
import { Switch, Route } from 'react-router-dom';
// import './App.css';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </Container>
  );
}

export default App;
