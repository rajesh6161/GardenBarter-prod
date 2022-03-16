import './App.css';
import Login from '../src/components/Login/login';
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import NearbyCard from './components/Nearby/NearbyCard';
import Footer from './components/Footer/footer';
import { myProducts } from './components/Data/Data'

function App() {
  useEffect(() => {
    localStorage.setItem('myProducts', JSON.stringify(myProducts))
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
