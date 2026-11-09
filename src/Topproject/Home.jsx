
import  microwave from '../assets/microwave.png'
import  electricjug from '../assets/electricjug.png'
import  hotpan from '../assets/hotpan.png'
import  iron  from '../assets/iron.png'
import  toaster from '../assets/toaster.png'
import  fridge  from '../assets/fridge.png'
import  standingfan from '../assets/standingfan.png'
import   cookinggas from '../assets/cookinggas.png'
import    pressingiron  from '../assets/pressingiron.png'
import  airfryer from '../assets/airfryer.png'
import { useContext } from "react";
import { CartContext } from "./Cartconext.jsx";



export default function Home(){
       const { addToCart } = useContext(CartContext);
    const products =[
    {
        id:31,
        name: "microwave",
        price:4800,
        Image:microwave,

    },

    {
         id:32,
        name: "electricjug",
        price:5000,
        Image:electricjug,

    },

{ 
        id:33,
        name: "hotpan",
        price:8500,
        Image: hotpan,

},

{
      id:34,
        name: "iron",
        price:700,
        Image:iron,
},
{
        id:35,
        name: "toaster",
        price:2000,
        Image:toaster,

},

{
         id:36,
        name: "fridge",
        price:800,
        Image:fridge,

},

{
     id:37,
        name: "standingfan",
        price:800,
        Image:standingfan,

},

{
         id:38,
        name: "cookinggas",
        price: 800,
        Image:cookinggas,

},

{
     id:39,
        name: "pressingiron",
        price:500,
        Image:pressingiron,

},
{
         id:40,
        name: "airfryer",
        price:2200,
        Image:airfryer,

},

];
    

    return(
        
                <>
        <div className="electronincs-page">
            <div className="electronics-header">
                <div>
                    <h1>HOME APPLIANCES</h1>
                    <p>discover the best Home appliances.</p>                   
                </div>

            </div>
        </div>


        <div  className="product-grid">
            {products.map((product) => 
            (

                <div className="product-card" key={product.id}>

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