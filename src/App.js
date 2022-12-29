import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
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
      <Footer />
    </>
  );
}

export default App;
