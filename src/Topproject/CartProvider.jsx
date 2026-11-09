import { useState } from "react";
import { CartContext } from "./Cartconext.jsx";

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(product){
        setCart((currentCart) => { 
            const existing = currentCart.find((item) => item.id === product.id);
        
        if(existing) {
            return currentCart.map((item) => item.id === product.id ? {...item,quantity: item.quantity + 1}
            : item);
        }
      
        return [...currentCart, {...product,quantity: 1}];

        });
    }

    function removefromcart(productid){
        setCart((currentCart) => currentCart.filter((item) => item.id  !== productid)
    );
    }


    const cartcount = cart.reduce((total,item)=> total + item.quantity,0);

    const totalprice = cart.reduce((total,item) => total + item.price * item.quantity,0);



    return (
        <CartContext.Provider value={{ cart, addToCart ,removefromcart,cartcount,totalprice}}>
            {children}
        </CartContext.Provider>
    );
}