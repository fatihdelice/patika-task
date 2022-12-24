import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import ScoreModal from './components/ScoreModal';
import WordsBox from './components/WordsBox';

function App() {
  return (
    <div className="App">
      <Header />
      <WordsBox />
      <Input />
      <ScoreModal />
    </div>
  );
}

export default App;
