import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;

/* <Container>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={formSubmitHandler} />
  <h2>Contacts</h2>
  <Filter value={filter} onChange={changeFilter} />
  <ContactList
    contacts={getVisibleContacts()}
    onDeleteContact={deleteContact}
  />
</Container>; */

// // Получает все состояние redux state, возвращает обьект (свойства обьекта = пропсы компонента)
// const mapStateToProps = state => ({
//   a: 5,
//   b: 10,
// });

// // Передает методы для отправки action
// const mapDispatchToProps = dispatch => {
//   // Возвращаем обьект с пропсами
//   return {};
// };
