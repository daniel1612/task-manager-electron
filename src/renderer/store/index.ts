import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import themeReducer from './themeSlice';

// Configure the Redux store with notes and theme slices
const store = configureStore({
  reducer: {
    notes: notesReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 