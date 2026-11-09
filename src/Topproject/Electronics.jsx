
import  phone from '../assets/iphone14.png'
import  laptop from '../assets/laptop.png'
import  headphones from '../assets/headphones.png'
import  smartwatch from '../assets/smartwatch.png'
import tablet from '../assets/tablet.png'
import camera from '../assets/camera.png'
import speaker from '../assets/speakers.png'
import keyboard from '../assets/keyboardm.png'
import mouse from '../assets/gamingmouse.png'
import  monitor from '../assets/monitor.png'
import { useContext } from "react";
import { CartContext } from "./Cartconext.jsx";



 export default function Electronics() {
    const { addToCart } = useContext(CartContext);
    
    const products =[
    {
        id: 1,
        name: "iphone14pro",
        price:400,
        Image:phone,

    },

    {
         id:2,
        name: "map book pro",
        price:5000,
        Image:laptop,

    },

{ 
        id:3,
        name: "wireless headphones",
        price:8500,
        Image: headphones,

},

{
      id:4,
        name: "smart watch",
        price:700,
        Image:smartwatch,

},
{
        id:5,
        name: "tablet",
        price:2000,
        Image:tablet,

},

{
         id:6,
        name: "digital camera",
        price:3200,
        Image:camera,

},

{
     id:7,
        name: "bluetooth speaker",
        price:5500,
        Image:speaker,

},

{
         id:8,
        name: "gaming key board",
        price: 500,
        Image:keyboard,

},

{
     id:9,
        name: "wireless mouse",
        price:500,
        Image:mouse,

},
{
         id:10,
        name: "computer monitor",
        price:2200,
        Image:monitor,

},

];
    
    return (
        <>
        <div className="electronincs-page">
            <div className="electronics-header">
                <div>
                    <h1>Electronics</h1>
                    <p>discover the latest electronics products.</p>                   
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

                
            </div>  ))}
        </div>
</>
    );
}