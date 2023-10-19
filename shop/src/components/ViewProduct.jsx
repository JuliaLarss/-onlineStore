import { useState } from "react"
import { Link, useOutletContext, useParams } from "react-router-dom"
import Api from "./Api"
import Loading from "./Loading"

const ViewProduct = () => {

  const[added,setAdded] = useState(false)
  const {cart, setCart} = useOutletContext()
  let {id}= useParams()
  const {
    data:product,
    loading,
    error,
  } = Api(`https://fakestoreapi.com/products/${id}`)

    return (
      <div>
        {loading && <Loading />}
        {error && <h1>{error}</h1>}
        { product && (
          <div className="productContainer">
            <div className="image">
              <img src={product.image} alt={product.title}/>
            </div>
            <div className="text">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <h4>${product.price}</h4>
              <div className="btnContainer">
                <button className="linkBtn"><Link to={'/shop'} className="link">Continue Shopping</Link></button>
                {!added ? (
                  <button className="linkBtn" onClick={() => { 
                    const addToCart = cart.find((item) => item.id === product.id)
                    if(!cart.includes(addToCart)){
                      product.quantity = 1
                      setCart([...cart, product])
                      setAdded(true)
                    }else{
                      alert('This product is already in your cart')
                    }
                  }}>Add to Cart</button>
                ): (
                  <button className="linkBtn"><Link to={'/cart'} disabled className="link">View Cart</Link></button>
                )}
              </div>
              
            </div>
          </div>
        )}
      </div>
    )
  }
  
  export default ViewProduct