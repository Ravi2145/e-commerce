
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home/Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import LogIn from './Pages/LogIn/LogIn';
import Cart from './Pages/Cart/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/LogIn" element={<LogIn/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Routes>
</BrowserRouter>

  // <React.StrictMode>
  // <Home/>
  // <CartItem/>
  // <Register/>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
