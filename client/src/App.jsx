import Home from "./pages/Home"
import React  from 'react';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {

  Routes,
  Route

} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
const App = () => {
  const user =useSelector((state)=>state.user.currentUser);
  return (/*houni bdit nbadel*/
     <div className="App">
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/products/:category' element={<ProductList/>} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path="/success" element={<Success />}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
};

export default App;