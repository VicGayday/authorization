import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
// import Login from './pages/Login/Login';
import Header from './components/Header/Header'
import RouteComponent from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* <Login /> */}
      <RouteComponent />
    </BrowserRouter>
  );
}

export default App;
