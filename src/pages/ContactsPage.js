import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import styles from './Pages.module.css';

function ContactsPage() {
  return (
    <>
      <h1 className={styles.contactsTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

export default ContactsPage;
