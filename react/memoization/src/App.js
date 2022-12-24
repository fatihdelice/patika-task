import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);

  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number]);

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} />
      {/* <Header data={data} /> */}
      <hr />

      <h1>{number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>Click</button> */}
    </div>
  );
}

// function calculateObject(number) {
//   return { name: 'Fatih', number };
// }

export default App;
