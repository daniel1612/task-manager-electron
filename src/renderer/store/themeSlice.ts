import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '../types/theme';

// themeSlice manages the app's light/dark mode
export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark' as ThemeState,
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer; 