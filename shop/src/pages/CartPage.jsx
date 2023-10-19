import { Link, useOutletContext } from "react-router-dom"
import Empty from "../components/Empty";


const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
 
  return (
      <div>
        <div>
          <h4>My Cart ({cart.length})</h4>
          {cart.length === 0 && <Empty />}
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id}>
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                  <div>
                    <h6>{product.title}</h6>
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
        </div>
        {cart.length > 0 && (
          <div>
            <div>
                Total: ${total.toFixed(2)}
                <button
                  onClick={() => {
                    setCart([])
                  }}
                >
                  <Link
                    to='/checkout'>
                    PROCEED TO CHECKOUT
                  </Link>
                </button>
                <button >
                  <Link
                    to='/shop'>
                    Continue shopping
                  </Link>{' '}
                </button>
              </div>
            </div>
        )}
      </div>
  )
}

export default Cart