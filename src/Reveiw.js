import React from 'react'
import { review } from "./Data"
import quoteImg from "./assets/images/quote-img.png"


const Reveiw = () => {
  return (
<>
    <section className='review' id="review">
      <h1 className="heading">
        customer's <span> review</span>
      </h1>
      <div className="box-container">
{
  review.map((item,index)=>(
    <div className="box">
      <img src={quoteImg} alt="" className='quote'/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dignissimos, officia autem, animi
       voluptate rem expedita placeat et aliquid provident impedit quasi labore minima esse reprehenderit nes
       ciunt laboriosam repellat assumenda.</p>
       <img src={item.img} alt=""  className='user'/>
       <h3>john deo</h3>
       <div className="stars">
       <i className='fas fa-star'/>
       <i className='fas fa-star'/>
        <i className='fas fa-star'/>
        <i className='fas fa-star'/>
        <i className='fas fa-star-half-alt'/>
       </div>
    </div>



  ))
}
      </div>
    </section>
    </>
  )
}

export default Reveiw
