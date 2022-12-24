import './App.css';
import Header from './components/Header';
import MoneyBar from './components/MoneyBar';
import ProductList from './components/ProductList';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className="container">
      <Header />
      <MoneyBar />
      <ProductList />
      <Receipt />
    </div>
  );
}

export default App;
