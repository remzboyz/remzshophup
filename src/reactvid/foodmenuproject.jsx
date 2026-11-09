
// / the import/ 
import spanishPizzaimg from './assets/Screenshot (36).png';
import superHero  from './assets/Screenshot (37).png';
import spanish   from './assets/spanishpizza.png';
import  main from './assets/Screenshot (40).png';
import fuji from './assets/fuji.png';
import calc from './assets/pizzapros.png'
import './index.css' 



/* THE DATA */
const pizzaData = [
    {
        name:" pizza gocaccia",
        price:6,
        photoName:"pizzas/focarcia.jpg",
        soldout:false,
    },

    {
        name:"pizza margherita",
        price:10,
        photoName:"pizzas/focarcia.jpg",
        soldout:false,

    },

    {
        name:"pizza spinaci",
        ingredients:"tomato,morarella,mushrooms,spinach and onion",
        price:12,
        photoName:"pizzas/focarcia.jpg",
        soldout:false,

    },

    {
          name:"pizza funchi",
        ingredients:"tomato,morarella,mushrooms and onion",
        price:12,
        photoName:"pizzas/focarcia.jpg",
        soldout:false,

    },

    {
          name:"pizza salamino",
        ingredients:"tomato,morarella, and pepperoni",
        price:15,
        photoName:"pizzas/focarcia.jpg",
        soldout:false,

    },
    
    {

  name:"pizza  prosciutte ",
  ingredients:"tomato,morarella, ham,aragulla,and burratta cheese",  price:12,
 photoName:"pizzas/focarcia.jpg",
 soldout:false,
      
    },  
];


/* APP COMPONET*/
function App(){
return (
    <>
<div className='container'> <Header/>
<Menu/>
<Footer/> </div></>  



);
}

/*APP FUNCTION*/

function Header(){
    return (
    <header className='header'><h1 style={{ fontSize:"32px",textTransform:"uppercase"}}>REMI PIZZA COMPANY</h1>
    </header>);
}

function Menu(){
// const pizzas = [];
    const pizzas = pizzaData;
    const numpizza = pizzas.length;

   return( <>
   <main className='menu'>
    <h2>our menu</h2>
    {numpizza > 0  ? ( <div className='pizza'>
        {pizzas. map((pizza) => (<Pizza pizzaObj = {pizza}  key={pizza.name} />))}
    </div>
     
    
      ) :null}
        </main>
        </> ) ;
}

function  Pizza({pizzaObj}){
    return(
    <>
    <div className='pizzas'>
<img src=  {pizzaObj.photoName} alt='jeron'   />
<div>
    <h3>{pizzaObj.name} </h3>
    <p >{pizzaObj.ingredients} </p>
    <span>{pizzaObj.price}</span>
    </div>
   </div> 
   </>);
}




function  Footer(){
 const hour  = new  Date().getHours();
 const openhour = 12;
 const closehour = 22;
 const isopen = hour >= openhour && hour <= closehour;
 console.log(isopen);

//  if (!isopen)
//     return(<h3> we closed for now come back {openhour}:00am </h3>)



    return(
        <footer className='footer'>
       {isopen ? (<Order openhour =   {openhour}  closehour={closehour}/>) :( <p> we are happy to welcome you between{openhour}:00 and {closehour}:00. </p>
      
    )} </footer>
    );
}

function Order({closehour , openhour}){
    return(
       <div className='order'>
        <p>

            we are open from {openhour}:00am  until {closehour}:00am come visit us or order online.
        </p>
        <button className='btn'>order</button>
       </div>
       );
}




// the css


// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// html {
//   font-size: 62.5%;
// }

// body {
//   font-family: 'Roboto Mono', sans-serif;
//   color: #252525;
//   font-weight: 400;
//   background-color: #f7f2e9;
//   border-bottom: 1.6rem solid #edc84b;
//   min-height: 100vh;
//   padding: 3.2rem;
//   padding-bottom: 6rem;
// }

// .container {
//   max-width: 80rem;
//   margin: 0 auto;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4.8rem;
// }

// /* *************** */

// .header {
//   align-self: stretch;
// }

// .header h1 {
//   /* Non-accessible color */
//   color: #edc84b;
//   /* color: #af8602; */

//   text-transform: uppercase;
//   text-align: center;
//   font-size: 5.2rem;
//   font-weight: 300;
//   letter-spacing: 3px;
//   position: relative;
//   width: 100%;
//   display: block;
// }

// .header h1::before,
// .header h1::after {
//   display: block;
//   content: '';
//   height: 3px;
//   width: 12rem;
//   background-color: #edc84b;
//   position: absolute;
//   top: calc(50% - 1px);
// }

// .header h1::before {
//   left: 0;
// }

// .header h1::after {
//   right: 0;
// }

// /* *************** */

// .menu {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4rem;
// }

// .menu h2 {
//   display: inline-block;
//   padding: 1rem 0;
//   border-top: 2px solid currentColor;
//   border-bottom: 2px solid currentColor;
//   font-size: 2.4rem;
//   text-transform: uppercase;
//   letter-spacing: 3px;
//   font-weight: 500;
// }

// .menu > p {
//   font-size: 1.5rem;
//   text-align: center;
//   line-height: 1.6;
//   width: 80%;
// }

// .pizzas {
//   list-style: none;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 4.8rem;
// }

// .pizza {
//   display: flex;
//   gap: 3.2rem;
// }

// .pizza img {
//   width: 12rem;
//   aspect-ratio: 1;
//   align-self: start;
// }

// .pizza div {
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   padding: 0.4rem 0;
// }

// .pizza h3 {
//   font-size: 2rem;
//   font-weight: 400;
// }

// .pizza p {
//   font-size: 1.4rem;
//   font-weight: 300;
//   font-style: italic;
//   margin-bottom: auto;
// }

// .pizza span {
//   display: block;
//   font-size: 1.6rem;
// }

// .pizza.sold-out {
//   color: #888;
// }

// .pizza.sold-out img {
//   filter: grayscale();
//   opacity: 0.8;
// }

// /* *************** */

// .footer {
//   font-size: 1.4rem;
// }

// .order {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2.4rem;
// }

// .btn {
//   color: inherit;
//   font-family: inherit;
//   border: none;
//   font-size: 1.4rem;
//   font-weight: 500;
//   background-color: #edc84b;
//   padding: 1.4rem 3.2rem;
//   cursor: pointer;
//   transition: all 0.2s;
// }

// .btn:hover {
//   background-color: #e9bb24;
// }

// /*
// SPACING SYSTEM (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128

// FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 /52 / 62 / 74 / 86 / 98
// */
