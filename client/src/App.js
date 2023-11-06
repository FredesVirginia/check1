import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import { BrowserRouter, Route , Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className='containerApp'>
      <h1>Hola</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
