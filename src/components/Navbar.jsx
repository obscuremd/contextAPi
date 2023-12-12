import { ShoppingCart } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { CartContext } from "./context/CardContext"
import { useContext } from "react"


const Navbar = () => {

  const {items} = useContext(CartContext)
  console.log(items);

  return (
    <div className="flex w-full h-[10vh] pl-96 pr-56 justify-between bg-orange-300 items-center">
      <Link to='/'>
        <p>home</p>
      </Link>
        
      <Link to='/cart' className="flex">
        <ShoppingCart/>
        <p>{items.length}</p>
      </Link>  
    </div>
  )
}

export default Navbar
