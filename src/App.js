import "./assets/css/style.css";
import React from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Reveiw from "./Reveiw";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {CartProvider} from "react-use-cart";

function App() {
  return (
   <>
   <CartProvider>
    <Navbar/>
    <Home />
    <About />
    <Menu title="title" img="" price="price"/>
    <Product />
    <Reveiw />
    <Contact />
    <Blog />
    <Footer />
    </CartProvider>
   </>
  );
}

export default App;
