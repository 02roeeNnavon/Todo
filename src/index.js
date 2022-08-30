import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import MainPage from './pages/MainPage';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import About from './pages/About';
import SiteHeader from './cmps/SiteHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SiteHeader></SiteHeader>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
