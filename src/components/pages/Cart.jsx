import React, { useContext } from 'react'
import { CartContext } from '../context/CardContext'



const Cart = () => {

  const {items} = useContext(CartContext)

  return (
    <div>
      {
        items.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" />
            <p>{item.name}</p>
          </div>
          
        ))
      }
    </div>
  )
}

export default Cart