import { useState } from "react";

// const initiaLItems = [
//   {id: 1, description: "Passport", quantity:2, packed: false },
//   {id: 2, description: "socks", quantity:12, packed: true },
//     {id: 3, description: "charger", quantity:1, packed: false },
// ];
function App(){
  const [items,setItems] = useState([]);

  
function Handleadditems(item){
  setItems((items)=> [...items,item]);
}

function Handledeleteitem(id){
  console.log(id);
  setItems((items) => items.filter((item) => item.id !== id));
}

function Handletoggleitem(id){
  setItems((items) => items.map((item) => item.id === id ? {...item,packed: !item.packed}: item)
  );
}


function Deleteitem(){
  
  const rigo = window.confirm("Are you sure you want to delete all items?");

  if(rigo) setItems([]);


}

  return( 
      <div className="app">
        <Logo/>
        <Form onAdditems = {Handleadditems} />
        <Packinglist  items={items} onDeleteitem={Handledeleteitem} 
        onToggleitem={Handletoggleitem} 
        onCanon={Deleteitem} />
        <Stats items={items}  />
      </div>

   );
}

function Logo(){
  return(
    <h1> Far Away </h1>
  );
}

function Form({onAdditems}){



  const [description,setDescription] = useState();
const [quantity,setQuantity] =  useState(1);



  function Handlesubmit(e){
    e.preventDefault();

    if (!description)  return;

    const newItem = { description,quantity,packed: false, id: Date.now()};

    console.log(newItem);

    onAdditems(newItem);





  }
return(
  <>
  <form className="add-form"  onSubmit={Handlesubmit}>
    <h3>
      what  you need  for your trip?
    </h3>
    <select value={quantity}   onChange={(e) => setQuantity(Number(e.target.value)) }> {Array.from({length : 20}, (_,i) => i+1).map((num) => (<option value={num} ={num}>{num}</option>
</>
))} </select>
  <input type="text" placeholder="Item..."  value={description}  onChange={(e) => setDescription(e.target.value) } />
  <button>Add</button>

  </form>

);
}

function  Packinglist({items, onDeleteitem,onToggleitem, onCanon}){
  const [sortby,setSortby] = useState("input");

  // let sorteditems;
  // if (sortby==="input") sorteditems= items;

  // if(sortby==="descriptions")
  //   sorteditems = items.slice().sort((a,b) => a.description.localeCompare(b.description));

  // if (sortby==="packed")
  //   sorteditems =items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
return( 


  

  
 <div  className="list">
    <ul> { items.map((item) => (<Item item={item} onDeleteitem={onDeleteitem} onToggleitem={onToggleitem} ={item.id}/>))} </ul>
 
 <div className="actions">
  <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
    <option value="input">sort by input order</option>
    <option value="description">sort by  description</option>
    <option value="packed">sort by packed status </option>
  </select>
 <button onClick={onCanon}>reset</button>
 </div>

  </div>
     

);
}



function  Item({item , onDeleteitem, onToggleitem}) {
  return(<li>
    <input type="checkbox" value={item.packed} onChange= {() => onToggleitem(item.id)} /><span style={item.packed ? {textDecoration:"line-through"}: {}}>{""} {item.quantity} {item.description}</span>
  <button onClick={() =>  onDeleteitem(item.id)}> ❌</button> </li>);
}

function Stats( {items}){
  const numitems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked/numitems)* 100);
return(
<footer className="stats">
<em>
  {percentage === 100
   ? "you got  everything! Ready to go"
  : `you have ${numitems} items on your list, and you already packed ${numpacked} (${percentage}%)` } 
  </em>
  </footer>
);
}



export default App
