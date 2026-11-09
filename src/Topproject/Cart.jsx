
import { useContext } from "react";
import { CartContext } from "./Cartconext";


export default function Cart(){
    const {cart,removefromcart,totalprice} = useContext(CartContext);

    return(
        <div className="cart-page">
            <h1>My Shopping cart</h1>
            {cart.length === 0 ? ( <p>your cart is empty. add some products </p>) : (

                <>
                <div className="cart-items">
                {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                    <img src={item.Image || item.Image}
                    alt={item.name}
                    className="cart-product-image"
                    width="100"/>
                        
                
                <div className="cart-product-details">
                    <h3> {item.name} </h3>
                    <p> price: ${item.price.toLocaleString()}</p>
                    <p>Quantity :{item.quantity}</p>
                    <p className="cart-total">
                        Subtotal:$ 
                        {(item.price * item.quantity).toLocaleString()}
                    </p>
</div>

                    <button className="remove-button" onClick={()=> removefromcart(item.id)}>
                   Remove
                    </button>
                    </div>
                
                ))}
                </div>
                <div className="cart-total">
<h2>  Total:${totalprice.toLocaleString()}</h2>
</div>
              </>
          )}
        </div>
    );
}
