import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import HomeAdmin from "./adminPage/home/Home";
import { BrowserRouter } from "react-router-dom";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);
  return (
    /*houni bdit nbadel*/
    <div className='App'>
      <BrowserRouter>
        <Announcement />
        <Navbar isAuth={isAuth} />{" "}
        <Routes>
          <Route
            exact
            path='/adminPortal'
            element={<HomeAdmin isAuth={isAuth} />}
          />
          <Route exact path='/' element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/success' element={<Success />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
