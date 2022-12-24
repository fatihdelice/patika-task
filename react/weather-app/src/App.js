import './App.css';
import Container from './components/Container';
import { CityProvider } from './contexts/CityContext';
import { WeatherProvider } from './contexts/WeatherContext';


function App() {
  return (
    <CityProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </CityProvider>
  );
}

export default App;
