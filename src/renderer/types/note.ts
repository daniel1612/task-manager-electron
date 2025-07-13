// Note type represents a single note entity
export type Note = {
  id: string;
  title: string;
  content: string;
  dueDate: string; // ISO date string
  priority: 'low' | 'medium' | 'high';
};

// NotesState represents the notes slice of the Redux state
export type NotesState = {
  notes: Note[];
  selectedNote: Note | null;
}; 