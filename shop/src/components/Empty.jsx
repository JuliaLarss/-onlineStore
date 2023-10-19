import { Link } from "react-router-dom"

const Empty = () => {

    return ( 
        <div>
            <h5>Your cart is empty</h5>
            <p>You have no items in your cart. Start adding items by clicking the button below</p>
            <button><Link to="/shop">Contionue shopping</Link></button>
        </div>
    )
}

export default Empty