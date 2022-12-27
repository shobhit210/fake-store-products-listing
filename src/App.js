import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headbar from './components/Headbar';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
    <Headbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
