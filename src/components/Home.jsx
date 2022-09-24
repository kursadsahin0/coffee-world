import React from 'react'
import { FaGift } from "react-icons/fa";
import coffee1 from '../images/coffee1.jpg'
import product1 from '../images/product1.png'
import chocolate from '../images/chocolate.png'
import cups from '../images/cups.png'
import discount from '../images/discount.jpg';
import coffeeCek from '../images/coffeeCek.jpg';
import cake from '../images/cake.jpg';
import chocolateCoffee from '../images/chocolateCoffee.jpg';
import cupCake from '../images/cupcake.jpg';
import gift1 from '../images/gift1.png';
import gift2 from '../images/gift2.png';
import '../styles/home.css';
export default function Home() {
  return (
    <>
      <div className='links'>
        <a href='#'> Gift</a>
        <a href="#">Coffee</a>
        <a href="#">Chocolate</a>
        <a href="#">Cake</a>
        <a href="#">Discounts</a>
        <a href="#">About Us</a>
      </div>
      <div className='search'>
        <input type="text" placeholder='Search...' className='searchbar' />
      </div>

      <img src={coffee1} alt="" className='homeImage' />
      <h1 className='title'>Categories</h1>
      <div className='categories'>
        <img src={product1} alt="" className='product1' />
        <img src={chocolate} alt="" className='product1' />
        <img src={cups} alt="" className='product1' />
        <img src={discount} alt="" className='product1' />
      </div>

      <div className='bestSeller'>
        <h1 className='titleBest'>Best Seller</h1>
        <div className='bestContainer'>
          <div className='bestProduct'>
            <img src={coffeeCek} alt="" className='bestImage' />
            <div className='button'>
            <button className='add'>Add Cart</button>
            <p className='price'>₺79,00</p>
            </div>
            </div>
            <div className='bestProduct'><img src={cake} alt="" className='bestImage' />
            <div className='button'>
            <button className='add'>Add Cart</button>
            <p className='price'>₺25,00</p>
            </div>
            
            </div>
            <div className='bestProduct'> 
            <img src={chocolateCoffee} alt="" className='bestImage' />
            <div className='button'>
            <button className='add'>Add Cart</button>
            <p className='price'>₺35,00</p>
            </div>
            </div>
          <div className='bestProduct'>
            <img src={cupCake} alt="" className='bestImage' />
            <div className='button'>
            <button className='add'>Add Cart</button>
            <p className='price'>₺20,00</p>
            </div>
            </div>
        </div>
      </div>

<div className='giftContainer'>
  <img src={gift1} alt="" />
  <img src={gift2} alt="" />
</div>

    </>
  )
}
