import  adiddaswhite from '../assets/adiddas white.png'
import  adiddasred from '../assets/adiddas red.png'
import joggingshoe from '../assets/jogging shoe.png'
import adiddasgrey from '../assets/adiddas grey.png'
import  blackshoe from '../assets/blackshoe.png'
import  nikeairforce from '../assets/nike airforce.png'
import  nikeallstar from '../assets/nikeallstar.png'
import  jordans from '../assets/jordans.png'
import  adiddasblack2 from '../assets/adiddas black2.png'
import addidasblack   from '../assets/addidas black.png'
import { useContext } from "react";
import { CartContext } from "./Cartconext.jsx";

export default function Shoes(){
          
       const { addToCart } = useContext(CartContext);
            const products =[
            {
                id:41,
                name: "adiddas white",
                price:550,
                Image:adiddaswhite,
        
            },
        
            {
                 id:42,
                name: "adiddas red",
                price:1500,
                Image:adiddasred,
        
            },
        
        { 
                id:43,
                name: "jogging shoe",
                price:800,
                Image: joggingshoe,
        
        },
        
        {
              id:44,
                name: "adiddas grey",
                price:1900,
                Image:adiddasgrey,
        
        },
        {
                id:45,
                name: "blackshoe",
                price:200,
                Image:blackshoe,
        
        },
        
        {
                 id:46,
                name: "nike airforce",
                price:3500,
                Image:nikeairforce,
        
        },
        
        {
             id:47,
                name: "nike allstar",
                price:2500,
                Image:nikeallstar,
        
        },
        
        {
                 id:48,
                name: "jordans",
                price: 1500,
                Image:jordans,
        
        },
        
        {
             id:49,
                name: "adiddas black2",
                price:3500,
                Image:adiddasblack2,
        
        },
        {
                 id:50,
                name: "addidas black",
                price:2200,
                Image:addidasblack,
        
        },
        
        ];
          
    
return( 
    

        <>
        <div className="electronincs-page">
            <div className="electronics-header">
                <div>
                    <h1>Shoes</h1>
                    <p>discover the best  footwears .</p>                   
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

                
            </div> )  )}
        </div>
</>
  


);
}