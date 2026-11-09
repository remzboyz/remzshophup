
import  ps5 from '../assets/ps5.png'
import  ps4 from '../assets/ps4.png'
import  ps3 from '../assets/ps3.png'
import  fifa23  from '../assets/fifa23.png'
import  gta5  from '../assets/gta5.png'
import  spiderman  from '../assets/spiderman.png'
import  godofwar  from '../assets/godofwar.png'
import   wolverine from '../assets/wolverine.png'
import   ufc5 from '../assets/ufc5.png'
import   wwe2k26 from '../assets/wwe2k26.png'
import { useContext } from "react";
import { CartContext } from "./Cartconext.jsx";



export default function Console(){

       const { addToCart } = useContext(CartContext);
    const products =[
    {
        id:11,
        name: "Ps5",
        price:4800,
        Image:ps5,

    },

    {
         id:12,
        name: "Ps4",
        price:5000,
        Image:ps4,

    },

{ 
        id:13,
        name: "Ps3",
        price:8500,
        Image: ps3,

},

{
      id:14,
        name: "FiFA23",
        price:700,
        Image:fifa23,

},
{
        id:15,
        name: "GTA5",
        price:2000,
        Image:gta5,

},

{
         id:16,
        name: "SPIDERMAN",
        price:800,
        Image:spiderman,

},

{
     id:17,
        name: "GODOFWAR",
        price:800,
        Image:godofwar,

},

{
         id:18,
        name: "WOLVERINE",
        price: 800,
        Image:wolverine,

},

{
     id:19,
        name: "UFC5",
        price:500,
        Image:ufc5,

},
{
         id:20,
        name: "WWE2K26",
        price:2200,
        Image:wwe2k26,

},

];
    

    return(

                <>
        <div className="electronincs-page">
            <div className="electronics-header">
                <div>
                    <h1>Consoles</h1>
                    <p>discover the best gaming consoles and video games.</p>                   
                </div>
                            </div>
        </div>


        <div  className="product-grid">
            {products.map((product) => ( 
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