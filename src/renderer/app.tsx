import React from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import ThemeSwitcher from './components/ThemeSwitcher';
import  { RootState } from './store/index';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedNote } from './store/notesSlice';

const App = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const selectedNote = useSelector((state: RootState) => state.notes.selectedNote);
  const dispatch = useDispatch();
  const [addMode, setAddMode] = React.useState(false);

  return (
    <div className="app-container" data-theme={theme}>
      <ThemeSwitcher />
      {selectedNote || addMode ? (
        <NoteEditor
          onSave={() => setAddMode(false)}
          onCancel={() => { dispatch(clearSelectedNote()); setAddMode(false); }}
        />
      ) : (
        <NoteList onAdd={() => setAddMode(true)} />
      )}
    </div>
  );
};

export default App;