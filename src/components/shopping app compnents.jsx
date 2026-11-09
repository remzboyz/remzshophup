
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Electronics from './Topproject/Electronics.jsx'
import Fashion from './Topproject/Fashion.jsx'
import Shoes from './Topproject/Shoes.jsx'
import  Watches from './Topproject/watches.jsx'
import Categories  from './components/Categories.jsx';
import Console from './Topproject/Console.jsx'
import Home from './Topproject/Home.jsx';
import {CartProvider} from './Topproject/CartProvider.jsx'
import {useCart} from './Topproject/Usecontext.jsx';
import Cart from './Topproject/Cart.jsx';



 export default function App(){
    return(
        <>
        <CartProvider>
 <BrowserRouter>


      <Header />

      <Routes>
        
    
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Search />
              <Categories />
            </>
          }
        />

        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Watches" element={<Watches />} />
         <Route path="/Console" element={<Console />} />
         <Route path="/Home" element={<Home/>} />
         <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  
</CartProvider>
</>
    );
}

function  Header(){
      const  navigate = useNavigate();
    const {cart} = useCart();
 return(
    <div className="app">
        <header className="header">
            <div className="logo">SHOP<span>HUB</span>
            </div>
            <nav>
                <a Link href="/">Home</a>
                <a href="#">Products</a>
                <a href="#">Categories</a>
                <a href="#">Deals</a>
            </nav>
            <button className="cart" onClick={() => navigate("/cart")}>cart <span>{cart.length}</span></button>
        </header>
    </div>
 );
}


function Hero(){
    return( 
        
        <section className="hero">
            <div className="hero-content">
                <p className="small-title">Welcome to shophub</p>

                <h1>find what you <span>love.</span></h1>

                <p className="description"> search thousands of products and discover amazing deals .</p>
            </div>
        </section>
        
    );
}

    function  Search(){
        const  navigate = useNavigate();
        return(
        
            <section className="hero">
                <div className="hero-content">
                    <form className="search-box">
                        <span className="search-icon"></span>
                        <input type="text" placeholder="search for produts..."/>
                        
                        <button type="submit">search</button>
                    </form>

                    <div className="popular">
                 <span> popular:</span>
                 <button onClick={() => navigate("/Console")}>consoles</button>
             <button onClick={() => navigate("/Home")}>house appliances</button>
          <button onClick={()=> navigate("/Shoes")}>shoes</button>
           <button onClick={()=> navigate("/Watches")}  >watches</button>
                    </div>
                </div>
            </section>
    
    
    );
} 


