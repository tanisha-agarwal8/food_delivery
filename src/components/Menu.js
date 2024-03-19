import React from 'react';
import { useCart } from "react-use-cart";
import data from "../Info";

const Menu = () => {
  const { addItem } = useCart();

  return (
    <div>
      <section className="menu" id="menu">
        <h1 className="heading">our <span>Menu</span></h1>
        <div className="box-container">
          {data.productData.map(item => (
            <div className="box" key={item.id}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <div className="price">
                {item.price} <span>$20.99</span>
              </div>
              <button type="button" className="btn btn-warning btn-lg"  onClick={() => addItem(item)} >Add To Cart</button> {/* Fixed: Use button instead of anchor */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
