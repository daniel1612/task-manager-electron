import { Note } from '../types/note';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { deleteNote, selectNote } from '../store/notesSlice';

interface NoteListProps {
  onAdd: () => void;
}

const NoteList = ({ onAdd }: NoteListProps) => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  return (
    <div className="page-wrapper note-list">
      <h2>Tasks</h2>
      <button onClick={onAdd} style={{ marginBottom: 16 }}>
        Add New Task
      </button>
      <ul>
        {notes.map((note: Note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div style={{ fontSize: '0.9em', color: '#666', marginBottom: 4 }}>
              Due Date: {note.dueDate ? new Date(note.dueDate).toLocaleDateString() : '-'}
            </div>
            <div style={{ fontSize: '0.9em', color: note.priority === 'high' ? 'red' : note.priority === 'medium' ? 'orange' : 'green', marginBottom: 8 }}>
              Priority: {note.priority === 'high' ? 'High' : note.priority === 'medium' ? 'Medium' : 'Low'}
            </div>
            <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
            <button onClick={() => dispatch(selectNote(note.id))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;