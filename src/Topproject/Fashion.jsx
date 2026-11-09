import { useContext } from "react";
import { CartContext } from "./Cartconext.jsx";

import  huawishirt from '../assets/huawishirt (1).png'
import  shirt2 from '../assets/shirt2.png'
import blackshirt from '../assets/blackshirt.png'
import shirt3 from '../assets/shirt3.png'
import shirt4 from '../assets/shirt4.png'
import  blackjean2 from  '../assets/blackjean2.png'
import  baggyjeans from '../assets/baggyjeans.png'
import  blackjean from  '../assets/blackjean.png'
import   creamjean from '../assets/creamjean.png'
import     brownjean from '../assets/brownjean.png'






export default function Fashion(){

  const { addToCart } = useContext(CartContext);

        
        const products =[
        {
            id:21,
            name: "huawishirt ",
            price:450,
            Image:huawishirt,
    
        },
    
        {
             id:22,
            name: "shirt2",
            price:500,
            Image:shirt2,
    
        },
    
    { 
            id:23,
            name: "blackshirt",
            price:850,
            Image: blackshirt,
    
    },
    
    {
          id:24,
            name: "shirt3",
            price:700,
            Image:shirt3,
    
    },
    {
            id:25,
            name: "shirt4",
            price:2000,
            Image:shirt4,
    
    },
    
    {
             id:26,
            name: "blackjean2",
            price:3200,
            Image:blackjean2,
    
    },
    
    {
         id:27,
            name: "baggyjeans",
            price:5500,
            Image:baggyjeans,
    
    },
    
    {
             id:28,
            name: "blackjean",
            price: 500,
            Image:blackjean,
    
    },
    
    {
         id:29,
            name: "creamjean",
            price:500,
            Image:creamjean,
    
    },
    {
             id:30,
            name: "brownjean",
            price:220,
            Image:brownjean,
    
    },
    
    ];
      
    return(   

        <>
        <div className="electronincs-page">
            <div className="electronics-header">
                <div>
                    <h1>Fashion</h1>
                    <p>discover the best outfits .</p>                   
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
 