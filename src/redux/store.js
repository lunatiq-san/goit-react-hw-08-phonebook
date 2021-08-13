import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

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
const store = createStore(rootReducer, composeWithDevTools());

export default store;

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
