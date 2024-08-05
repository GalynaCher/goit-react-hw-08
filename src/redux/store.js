import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {contactsReducer} from './contacts/slice';
import filtersReducer from './filters/slice'; 
import authReducer from './auth/slice'

const authPersistConfig = {         // const persistConfig = {     // from https://www.npmjs.com/package/redux-persist#basic-usage
  key: "auth-token",                //    key: 'root',
  storage,                          //    storage,
  whitelist: ["token"],             // }
}
// const persistedReducer = persistReducer(persistConfig, rootReducer) 
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer) 

export const store = configureStore({ 
  reducer: {
    contacts: contactsReducer, 
    filters: filtersReducer, 
    //  auth: authReducer,
    auth: persistedAuthReducer,
  },
  // getDefaultMiddleware to set up middleware with specific configuration
  // Necessary to avoid errors related to non-serializable values in actions
  // Ignore 'persist/PERSIST' and 'persist/REHYDRATE' actions from serializability checks
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
  }),
});

// export { store }; 
export const persistor = persistStore(store);