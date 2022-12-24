import './App.css';
import Header from './components/Header';
import NoteEditor from './components/NoteEditor';
import NotesList from './components/NotesList';
import Search from './components/Search';

function App() {
  return (
    <div className="notes-app">
      <Header />
      <Search />
      <NoteEditor />
      <NotesList />
    </div>
  );
}

export default App;
