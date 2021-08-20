import { connect } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} name={name} key={id}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContats, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContats.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { filter, items } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
