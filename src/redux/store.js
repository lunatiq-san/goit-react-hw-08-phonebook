import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from './contacts/contacts-reducer';

const myMiddleware = store => next => action => {
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  logger,
];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devtools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
