import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Users from "./components/Users";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={isLogin ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
// state

// components

// props vs state (Hooks)
// read only
// css

// react (function component vs class component)

// hooks: useState, useEffect, useContext, useReducer, useCallback, useMemo

// param url
