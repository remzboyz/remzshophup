 
 import { useNavigate } from 'react-router-dom';


import  fashion from '../assets/fashion.png'
import electronics from '../assets/electronics.png'
import watches  from '../assets/watches.png'
import shoes from '../assets/shoes.png'

 
 export default function Categories(){
    const  navigate = useNavigate();
    return(
        <div className="app">
        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="category-grid">
                <div className="category"> <img src={electronics}height="300px" width="300px"  />electronics <button onClick={() => navigate("/Electronics")} className='category-arrow'>➔</button></div>
                <div className="category"> <img  src={fashion}height="300px" width="300px"/>fashion  <button onClick={() => navigate("/Fashion")} className='category-arrow'>➔</button></div>
                <div className="category"><img src={shoes} height="300px" width="300px"/>shoes <button onClick={()=> navigate("/Shoes")} className='category-arrow'>➔</button></div>
                <div className="category"><img src={watches} height="300px" width="300px"/>watches <button onClick={()=> navigate("/Watches")} className='category-arrow'>➔</button> </div>
            </div>
        </section>
        </div>
    );
}

