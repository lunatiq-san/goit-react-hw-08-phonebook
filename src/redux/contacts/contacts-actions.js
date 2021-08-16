import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

// v2
const addContact = createAction(types.ADD, ({ name, number }) => ({
  payload: {
    id: v4(),
    name,
    number,
  },
}));
const deleteContact = createAction(types.DELETE);
const changeFilter = createAction(types.CHANGE_FILTER);

// v1
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: v4(),
//     name,
//     number,
//   },
// });

// v1
// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// v1
// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
