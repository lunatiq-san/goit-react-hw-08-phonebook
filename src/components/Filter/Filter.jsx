import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from 'redux/contacts';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = event => dispatch(changeFilter(event.target.value));

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
