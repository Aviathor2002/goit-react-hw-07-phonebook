import { createSlice } from '@reduxjs/toolkit';

const items = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      return state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const items = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items },

//   reducers: {
//     add(state, action) {
//       state.items.push(action.payload);
//     },
//     remove(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { add, remove } = contactsSlice.actions;

export const getContacts = state => state.contacts.items;

// const persistConfig = {
//   key: 'contact',
//   storage,
// };

// export const contactsReducers = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
