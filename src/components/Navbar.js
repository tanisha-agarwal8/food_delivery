import React,{useRef} from 'react'
import Logo from "../assets/images/logo.png"
import { cart } from "../Data";
import {useCart} from "react-use-cart"

const Navbar = () => {
  
    const searchRef=useRef();
    const cartRef=useRef();
    const navbarRef=useRef();

const {isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
updateItemQuantity,
removeItem,
emptyCart,
} =useCart();




    
const searchHandler = () =>{
searchRef.current.classList.toggle("active"); //for addding active class to the serach bar
cartRef.current.classList.remove("active"); 
navbarRef.current.classList.remove("active"); 
};

const cartHandler = () =>{
    cartRef.current.classList.toggle("active"); 
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
};

const navbarHandler = () =>{
    navbarRef.current.classList.toggle("active"); 
    cartRef.current.classList.remove("active"); 
    searchRef.current.classList.remove("active");
}


  return (
  <>
 <header className="header">
    <a href='#' className='logo'>
        <img src={Logo} alt=""/>
    </a>
    <nav className="navbar" ref={navbarRef}>
        <a href="#home">home</a>
        <a href='#about'>about</a>
        <a href='#menu'>menu</a>
        <a href='#products'>products</a>
        <a href='#review'>review</a>
        <a href='#contact'>contact</a>
        <a href='#blogs'>blogs</a>
    </nav>
    <div className='icons'>
        <div className='fas fa-search' onClick={searchHandler}></div>
        <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
        <div className='fas fa-bars' id="menu-btn" onClick={navbarHandler}></div>
    </div>
    <div className='search-form' ref={searchRef}>
        <input type="search" placeholder="search here..." id="search-box"/>
        <label htmlFor='search-box' className='fas fa-search'></label>
    </div>
   <div className='cart-items-container' ref={cartRef}>
   {
    
    <table className='table table-light table-hover m-0'>
    <tbody>
    
                   {items.map((item,index)=>{
                    return(
                    <tr key={index}>
    <td>
        <img src={item.img} style={{height:'10rem'}}/>
    </td>
    <td>{item.title}</td>
    <td className='price'>{item.price}</td>
    <td>Quantity ({item.quantity})</td>
    <td>
    <button className='btn btn-info ms-2'
    onClick={() => updateItemQuantity(item.id ,item.quantity+1)}
    >+</button>
    <button className='btn btn-info ms-2'
     onClick={() => updateItemQuantity(item.id ,item.quantity-1)}
    >-</button>
    <button className='btn btn-danger ms-2'
    onClick={()=> removeItem(item.id)}
    >Remove</button>
    </td>
</tr>
                  ) })}
                   </tbody>
                   </table>
        
        }
    <a href="#" className="btn">checkout Now</a>
    <div className='col-auto ms-auto'>
    <h2>Total Price: {cartTotal}</h2>
   </div>
   </div>
 
 </header>
    
    </>
  )
}

export default Navbar
