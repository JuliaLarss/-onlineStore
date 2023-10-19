import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {

  const url = ('https://fakestoreapi.com/products?limit=20');
  const [cart, setCart] = useState([]);
  const Context = {url, cart, setCart}

  return (
      <>
        <nav className="nav">
          <div><Link to='/'  className="link">Home</Link></div>
          <div><Link to='/shop' className="link">Shop</Link></div>
          <div><Link to='/cart'  className="link">Cart</Link></div>
        </nav>
        <Outlet context={Context} />
      </>
    )
  }
  
  export default Nav