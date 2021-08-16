import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import contactsReducer from './contacts/contacts-reducer';

// v3
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;

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

// v2
// store - хранилище
// const store = createStore(rootReducer, composeWithDevTools());
