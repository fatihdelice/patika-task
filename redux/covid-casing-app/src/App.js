import './App.css';
import CardsList from './components/CardsList';
import Header from './components/Header';
import SelectCountry from './components/SelectCountry';

function App() {
  return (
    <div className="App">
      <Header />
      <CardsList />
      <SelectCountry />
    </div>
  );
}

export default App;
