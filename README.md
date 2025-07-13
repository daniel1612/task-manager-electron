# task-manager-electron-ts

A simple and efficient cross-platform task manager application built with **Electron**, **React**, **Redux**, and **TypeScript**. This project also uses **Jest** for unit testing, ensuring code quality and reliability.

---

## Application Description
A desktop task manager app that allows you to create, edit, and delete tasks. Each task includes a title, content, due date, and priority. The app features a clean, intuitive interface with light/dark themes, and persists your tasks locally so they are available even after restarting the app.

---

## Key Features
- **Cross-Platform**: Works seamlessly on Windows, macOS, and Linux.
- **React & Redux**: A dynamic front-end built with React and state management handled by Redux.
- **TypeScript**: Strongly typed codebase for improved reliability and maintainability.
- **Electron**: Desktop application experience using web technologies, with dark and light themes for readability.
- **Jest**: Comprehensive unit tests to ensure stability and code correctness.
- **Easy Task Management**: Create, edit, and delete tasks with a clean and intuitive interface.
- **Due Dates & Priorities**: Each task has a due date and a priority (Low, Medium, High).
- **Data Persistence**: Tasks are saved in localStorage and persist between sessions.

---

## Getting Started
To set up and run the project locally, follow these steps:

### Installation
1. Download or clone this repository to your computer.
2. Navigate to the project directory:
   ```bash
   cd task-manager-electron-ts
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run start
   ```

---

## Build Instructions (Executable)
To build the application for Windows:
```bash
npm run build
npm run electron:pack
```
This will generate a packaged version of the app in the `dist/` directory. You can run the executable directly from there.

---

## Running Tests
To run the test suite using Jest:
```bash
npm run test
```

---

## Test Files
All unit and component tests are located in the `src/renderer/test/` directory. This includes:
- Redux store logic (CRUD operations, theme switching)
- NoteEditor component (form behavior, validation)
- NoteList component (task display, actions)
- ThemeSwitcher component (theme toggling)

---

## Architecture Decisions
- **Electron** is used for cross-platform desktop support.
- **React** for UI, **Redux Toolkit** for state management.
- **TypeScript** for type safety.
- **localStorage** is used for simple, reliable task persistence.
- **Jest** for unit testing, focusing on Redux logic and UI components.
- The app is structured with clear separation between components, store, and main Electron process.

---

## Known Limitations
- Tasks are stored in localStorage, so they are not synced across devices.
- No support for rich text or attachments (plain text only).
- No user authentication.
- No search or categorization features (can be added as an enhancement).

---

## API Documentation (Main Modules)

### Redux Store (`src/renderer/store/index.ts`)
- **State:**
  - `notes: Task[]` – Array of task objects `{ id, title, content, dueDate, priority }`
  - `selectedNote: Task | null` – The task currently being edited
  - `theme: 'light' | 'dark'` – Current theme
- **Actions:**
  - `addNote(task)` – Add a new task
  - `updateNote(task)` – Update an existing task
  - `deleteNote(id)` – Delete a task by ID
  - `selectNote(id)` – Select a task for editing
  - `clearSelectedNote()` – Deselect task
  - `toggleTheme()` – Switch between light/dark mode

#### Task Type
```
type Task = {
  id: string;
  title: string;
  content: string;
  dueDate: string; // ISO date string
  priority: 'low' | 'medium' | 'high';
}
```

### Components
- **NoteList** – Displays all tasks in a list, with options to edit or delete each task.
- **NoteEditor** – Form for creating a new task or editing an existing one. Includes validation for required fields.
- **ThemeSwitcher** – Button to toggle between light and dark themes for the app.

---

## Project Structure
```
src/renderer/
  components/      # React components (UI)
  store/           # Redux slices and store configuration
  types/           # TypeScript type definitions
  test/            # All unit/component tests
  styles.css       # Global styles
  app.tsx          # Main app component
```

---

## Installation Instructions / Environment
- No special environment variables are required.
- All dependencies are managed via `npm install`.
- For Windows, simply run the build commands above and launch the generated `.exe` file.
