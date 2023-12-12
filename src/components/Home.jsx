import Product from './pages/Product'
import { Products } from '../assets/Products'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center gap-10 '>

        {Products.map((item)=>(
        <Link to={`/product/${item.id}`} key={item.id}>
          <Product
            
            id={item.id}
            img={item.image}
            name={item.name}
          />
         </Link>

        ))}

    </div>


    
  )
}

export default Home