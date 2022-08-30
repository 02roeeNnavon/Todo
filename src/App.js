import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import About from './pages/About';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
