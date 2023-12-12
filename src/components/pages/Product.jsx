import { ShoppingCart } from "@mui/icons-material"
import { useContext } from "react"
import { CartContext } from "../context/CardContext"

const Product = ({img, name}) => {

  const {addToCart} = useContext(CartContext)

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={img} alt="" className="w-56"/>
      <div className="flex">
        <p>{name}</p>
        <button onClick={() => addToCart(name, img)}>
          <ShoppingCart/>
        </button>
      </div>
      
    </div>
  )
}

export default Product
