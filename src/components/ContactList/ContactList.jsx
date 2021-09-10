import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

import Loader from 'react-loader-spinner';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
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
          color="#8c91b3"
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
              <Button
                type="button"
                variant="contained"
                color="secondary"
                className={styles.btn}
                startIcon={<DeleteIcon />}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default ContactList;
