import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
      <div>
        <Link to={`/shop/${product.id}`} />
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
      </div>
    )
  }
  Product.propTypes ={
    product:PropTypes.object,
  }
  export default Product