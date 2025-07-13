import store from '../store/index';
import { addNote, updateNote, deleteNote, selectNote, clearSelectedNote } from '../store/notesSlice';

describe('notesSlice (Task CRUD)', () => {
  it('should add a task', () => {
    const task = { id: '1', title: 'Test Task', content: 'This is a test task.', dueDate: '2024-12-31', priority: 'high' as 'high' };
    store.dispatch(addNote(task));
    const state = store.getState().notes;
    expect(state.notes).toContainEqual(task);
  });

  it('should update a task', () => {
    const updatedTask = { id: '1', title: 'Updated Task', content: 'Updated content.', dueDate: '2025-01-01', priority: 'medium' as 'medium' };
    store.dispatch(updateNote(updatedTask));
    const state = store.getState().notes;
    expect(state.notes).toContainEqual(updatedTask);
  });

  it('should delete a task', () => {
    store.dispatch(deleteNote('1'));
    const state = store.getState().notes;
    expect(state.notes).not.toContainEqual(expect.objectContaining({ id: '1' }));
  });

  it('should select a task', () => {
    const task = { id: '2', title: 'Another Task', content: 'Another test task.', dueDate: '2024-11-30', priority: 'low' as 'low' };
    store.dispatch(addNote(task));
    store.dispatch(selectNote('2'));
    const state = store.getState().notes;
    expect(state.selectedNote).toEqual(task);
  });

  it('should clear selected task', () => {
    store.dispatch(clearSelectedNote());
    const state = store.getState().notes;
    expect(state.selectedNote).toBeNull();
  });
}); 