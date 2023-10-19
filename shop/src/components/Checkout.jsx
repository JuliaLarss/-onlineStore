import { Link, useOutletContext } from "react-router-dom"


const Checkout = () => {
  const {cart} = useOutletContext();
  console.log(cart)
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    return (
      <div className="checkoutContainer">
        <h1>checkout</h1>
        <div className="orderOverview">
          <h3>Order Overview</h3>
          {cart.map((product) => {
            return (
              <div key={product.id} className="item">
                 <img src={product.image} alt={product.title} />
                  <h4>{product.title}</h4>
                  <p>{product.quantity} x ${product.price}</p>
              </div>
            )
          })}
          <h4><b>Total: </b>${total.toFixed(2)}</h4>
          <div className="cartBtns">
            <button><Link to='/cart' className="link">Edit Cart</Link></button>
          </div>
        </div>
        <div className="other">
        <div className="shipping">
          <form>
            <h3>Shipping information</h3>
            <div>
              <label>First name:</label>
              <input type="text" name="name"/>
            </div>
            <div>
              <label>Last name:</label>
              <input type="text" name="lastname"/>  
            </div>
            <div>
              <label>Address:</label>
              <input type="address" name="address"/>  
            </div>
            <div>
              <label>Apt/unit:</label>
              <input type="number" name="unit"/>  
            </div>
            <div>
              <label>City:</label>
              <input type="address" name="address"/>  
            </div>
            <div>
              <label>State:</label>
              <input type="state" name="state"/>  
            </div>
            <div>
              <label>Zip code:</label>
              <input type="address" name="address"/>  
            </div>
          </form>
        </div>
        <div className="payment">
          <form>
            <div>
              <label>Name on Card</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Card #</label>
              <input type="number" name="number" />
            </div>
            <div>
              <label>Expirety date</label>
              <input type="date" name="date" />
            </div>
          </form>
        </div>
        </div>
        <div className="checkoutBtn">
          <button><Link to='/shop' className="link">Continue shopping</Link></button>
          <button><Link to='/shop' className="link">Send Order</Link></button>
        </div>
      </div>
    )
  }

  export default Checkout

  // Order overview
  // form for shipping & payment 