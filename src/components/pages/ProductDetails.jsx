import { useParams } from 'react-router-dom';
import { Products } from '../../assets/Products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.id === parseInt(id));
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-56" />
      <p>{product.description}</p>
    </div>

    
  );

    

};

export default ProductDetails;
