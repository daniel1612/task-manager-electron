import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/index';
import { addNote, updateNote, clearSelectedNote } from '../store/notesSlice';
import  { useState, useEffect } from 'react';

interface NoteEditorProps {
  onSave?: () => void;
  onCancel?: () => void;
}

const NoteEditor = ({ onSave, onCancel }: NoteEditorProps) => {
  const dispatch = useDispatch();
  const selectedNote = useSelector((state: RootState) => state.notes.selectedNote);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
      setDueDate(selectedNote.dueDate);
      setPriority(selectedNote.priority);
    } else {
      setTitle('');
      setContent('');
      setDueDate('');
      setPriority('medium');
    }
  }, [selectedNote]);

  const saveNote = () => {
    if (!title.trim()) {
      setError('Please enter a title');
      return;
    }
    if (!dueDate) {
      setError('Please select a due date');
      return;
    }
    setError(null);
    if (selectedNote) {
      const updatedNote = { ...selectedNote, title, content, dueDate, priority };
      dispatch(updateNote(updatedNote));
      dispatch(clearSelectedNote());
    } else {
      const newNote = { id: Date.now().toString(), title, content, dueDate, priority };
      dispatch(addNote(newNote));
      if (onSave) onSave();
    }
    setTitle('');
    setContent('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <div className="page-wrapper note-editor">
      <h2>{selectedNote ? 'Edit Task' : 'New Task'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <select
        value={priority}
        onChange={e => setPriority(e.target.value as 'low' | 'medium' | 'high')}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <button onClick={saveNote}>{selectedNote ? 'Update Task' : 'Save Task'}</button>
      <button onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</button>
    </div>
  );
};

export default NoteEditor;
