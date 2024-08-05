import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el} onDelete={props.onDelete}/>
      ))}
      <b className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</b>
    </div>
  )
}

const showEmpty = () => {
  return (<div className='empty'>
    <h3>Товаров нет</h3>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Stuff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <TiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-btn ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='cart'>
            {props.orders.length > 0 ? showOrders(props) : showEmpty()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
