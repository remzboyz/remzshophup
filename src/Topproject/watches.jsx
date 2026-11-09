


import whitecitizen from '../assets/whitecitizen.png'
import whiterolex from '../assets/whiterolex.png'
import greenrolex from '../assets/gold&greenrolex.png'
import silverwatch from '../assets/silverwatch.png'
import whiteandgoldrolex from '../assets/white&goldrolex.png'
import blackcitizen from '../assets/blackcitizen.png'
import silverphillippe from '../assets/silverphillippe.png'
import  brownwatch from '../assets/brownwatch.png'
import whiteorisis from '../assets/whiteorisis.png'
import redrolex from '../assets/redrolex.png'
import { useContext } from "react";
import { CartContext } from "./Cartconext.jsx";

export default function Watches(){

    const { addToCart } = useContext(CartContext);
           
            const products =[
            {
                id:51,
                name: "white citizen",
                price:14000,
                Image:whitecitizen,
        
            },
        
            {
                 id:52,
                name: "whiterolex",
                price:500000,
                Image:whiterolex,
        
            },
        
        { 
                id:53,
                name: "greenrolex",
                price:850000,
                Image: greenrolex,
        
        },
        
        {
              id:54,
                name: "silverwatch",
                price:10000,
                Image:silverwatch,
        
        },
        {
                id:55,
                name: "whiteandgoldrolex",
                price:200000,
                Image:whiteandgoldrolex,
        
        },
        
        {
                 id:56,
                name: "blackcitizen",
                price:32000,
                Image:blackcitizen,
        
        },
        
        {
             id:57,
                name: "silverphillippe",
                price:55000,
                Image:silverphillippe,
        
        },
        
        {
                 id:58,
                name: "brownwatch",
                price: 75000,
                Image:brownwatch,
        
        },
        
        {
             id:59,
                name: "whiteorisis",
                price:50000,
                Image:whiteorisis,
        
        },
        {
                 id:60,
                name: "redrolex",
                price:720000,
                Image:redrolex,
        
        },
        
        ];
          
    
    return(
        
        <>
        <div className="electronincs-page">
            <div className="electronics-header">
                <div>
                    <h1>WATCHES</h1>
                    <p>discover the best Watches .</p>                   
                </div>
 
            </div>
        </div>


        <div  className="product-grid">
            {products.map((product) => (<div className="product-card" key={product.id}>

                    <div className="product-image">
                        <img  src={product.Image}  alt={product.name} />
                    </div>
                    <div className="product-info">
                        <h2>{product.name}</h2>
                        <p className="price">${product.price.toLocaleString()}</p>
                    <button className="add-cart" onClick={()=> addToCart(product)}>ADD to CART</button>
                    </div>

                
            </div>   ))}
        </div>
</>
 
    );
}