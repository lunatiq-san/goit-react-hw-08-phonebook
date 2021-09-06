import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import Loader from 'react-loader-spinner';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoadingContacts && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={50}
          width={50}
          className="loader"
        />
      )}
      {
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
      }
    </>
  );
};

export default ContactList;
