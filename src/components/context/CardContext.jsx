import { createContext, useState } from "react";


export const CartContext = createContext()

export function CartProvider({children}) {

    const [items, setItems] = useState([])

    const addToCart = (name,img) => {
        setItems((prevState) => [...prevState, {name, img}])
    }

    return(
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
    
}