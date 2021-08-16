import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import contactsReducer from './contacts/contacts-reducer';

// v1
// const initialState = {};
// // Функция, принимает предидущее состояние (state), действие (action)
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case 'name':

//     default:
//       return state;
//   }

//   // возвращает новое состояние
//   return state;
// };

// store - хранилище
// v2
// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
