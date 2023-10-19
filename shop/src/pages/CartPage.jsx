import { Link, useOutletContext } from "react-router-dom"
import Empty from "../components/Empty";


const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
  console.log(cart)
  return (
      <div className="cartContainer">
        <div className="innerContainer">
          <h4>My Cart ({cart.length})</h4>
          {cart.length === 0 && <Empty />}
          <div className="cartItems">
            {cart.map((product) => {
              return (
                <div key={product.id} className="cartItem">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="itemInfo">
                    <h5>{product.title}</h5>
                    <div>
                      <div>
                          {product.quantity} X ${product.price}
                      </div>
                      <div>
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) => {
                            if (e.target.value < 1) {
                              return
                            }
                            const newCart = [...cart]
                            const index = newCart.findIndex(
                              (item) => item.id === product.id
                            )
                            newCart[index].quantity = e.target.value
                            setCart(newCart)
                          }}
                        />
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setCart(cart.filter((item) => item.id !== product.id))
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {cart.length > 0 && (
          <div>
            <div className="cartBtns">
               <p>Total: ${total.toFixed(2)}</p> 
                <button>
                  <Link className="link"
                    to='/checkout'>
                    Proceed to checkout
                  </Link>
                </button>
                <button >
                  <Link className="link"
                    to='/shop'>
                    Continue shopping
                  </Link>
                </button>
              </div>
            </div>
        )}
        </div>
      </div>
  )
}

export default Cart