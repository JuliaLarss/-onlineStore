import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
      <div className='product'>
        <Link to={`/shop/${product.id}`} className='productLink'>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </Link>
      </div>
    )
  }
  Product.propTypes ={
    product:PropTypes.object,
  }
  export default Product