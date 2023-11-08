import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import AddProduct from "./Components/AddProduct";
import NewOrder from "./Components/NewOrder";
import { BrowserRouter, Route , Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className='containerApp'>
     
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/addProduct' element={<AddProduct />} />
           <Route exact path='/newOrder' element={<NewOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
