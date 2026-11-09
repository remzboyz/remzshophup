import { useState } from "react";

const initiaLItems = [
  {id: 1, description: "Passport", quantity:2, packed: false },
  {id: 2, description: "socks", quantity:12, packed: true },
    {id: 3, description: "charger", quantity:1, packed: false },
];
function App(){
  return( 
      <div className="app">
        <Logo/>
        <Form/>
        <Packinglist/>
        <Stats/>
      </div>

   );
}

function Logo(){
  return(
    <h1> Far Away </h1>
  );
}

function Form(){



  const [description,setDescription] = useState();
const [quantity,setQuantity] =  useState(1);
  function Handlesubmit(e){
    e.preventDefault();

    if (!description)  return;

    const newItem = { description,quantity,packed: false, id: Date.now()};

    console.log(newItem);




  }
return(
  <form className="add-form"  onSubmit={Handlesubmit}>
    <h3>
      what  you need  for your trip?
    </h3>
    <select value={quantity}   onChange={(e) => setQuantity(Number(e.target.value)) }> {Array.from({length : 20}, (_,i) => i+1).map((num) => (<option value={num} key={num}>{num}</option>
  ))} </select>
  <input type="text" placeholder="Item..."  value={description}  onChange={(e) => setDescription(e.target.value) } />
  <button>Add</button>

  </form>

);
}

function  Packinglist(){
return(


  
 <div  className="list">
    <ul> { initiaLItems.map((item) => (<Item item={item} key={item.id}/>))} </ul>
  </div>


);
}



function  Item({item}) {
  return(<li><span style={item.packed ? {textDecoration:"line-through"}: {}}>{""} {item.quantity} {item.description}</span>
  <button> ❌</button> </li>);
}

function Stats(){
return(
<footer className="stats">
  you have x items on your list, and you already packed x (x%)  </footer>
);
}



export default App
