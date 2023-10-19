import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {

  const url = ('https://fakestoreapi.com/products?limit=20');
  const [cart, setCart] = useState([]);
  const Context = {url, cart, setCart}

  return (
      <>
        <nav>
          <div><Link to='/'>Home</Link></div>
          <div><Link to='/shop'>Shop</Link></div>
          <div><Link to='/cart'>Cart</Link></div>
        </nav>
        <Outlet context={Context} />
      </>
    )
  }
  
  export default Nav