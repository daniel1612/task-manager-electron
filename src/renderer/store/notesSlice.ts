import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NotesState } from '../types/note';

const NOTES_STORAGE_KEY = 'notes-app-data';
function loadNotesFromStorage(): Note[] {
  try {
    const data = localStorage.getItem(NOTES_STORAGE_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {}
  return [];
}
function saveNotesToStorage(notes: Note[]) {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Error saving notes to storage:', e);
  }
}

// Initial state for notes
const initialState: NotesState = {
  notes: loadNotesFromStorage(),
  selectedNote: null,
};

// notesSlice manages all CRUD operations for notes
export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      saveNotesToStorage(state.notes);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) state.notes[index] = action.payload;
      saveNotesToStorage(state.notes);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      saveNotesToStorage(state.notes);
    },
    selectNote: (state, action: PayloadAction<string>) => {
      state.selectedNote = state.notes.find((note) => note.id === action.payload) || null;
    },
    clearSelectedNote: (state) => {
      state.selectedNote = null;
    },
    // Add reset action for testing
    reset: () => initialState
  },
});

export const { addNote, updateNote, deleteNote, selectNote, clearSelectedNote } = notesSlice.actions;
export default notesSlice.reducer; 