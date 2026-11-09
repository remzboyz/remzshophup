import { Children, useState } from 'react';
import  clark from './assets/Clark.png'
import sarah  from './assets/sarah.png'
import Sonia from './assets/sonia.png'
const    intialFriends =[
    {
        id:118836,
        name:"clark",
        image:  "https://i.pravatar.cc/48?u=118836",
        balance: -100,

    },
    {
         id:933372,
        name:"sarah",
         image:"https://i.pravatar.cc/48?u=933372",
        balance: 150,
         
    },
    {
         id:499476,
        name:"sonia",
         image: "https://i.pravatar.cc/48?u=499476" ,
        balance: 0,
     
       

    },
];



function Button({children,onClick}){
    return(
        <button className='button' onClick={onClick}>{children}</button>
    );
} 



function App(){
    const [friends,setFriends] = useState(intialFriends) ;
    const [nigga,setNigga] = useState(false);
    const [selectedfriend,setSelectedfriend] = useState(null);
    
    
function Handlebussy(){
    setNigga((show)=> !show);
}

function HandleaddFriend(friend){
    setFriends((friends)=>[...friends,friend]);
}

function  Handleselection(friend){
// setSelectedfriend(friend);
setSelectedfriend((cur)=>(cur?.id === friend.id ?  null: friend));
setNigga(false);
}

function Handlespitbull(){
    console.log(value);
    setFriends((friends)=>friends.map((friend) => friend.id === selectedfriend.id ? { ...friend, balance: friend.balance + value} : friend
)
);
setSelectedfriend(null);
}

    return(
<div className="app"> 
    <div className="sidebar">
        <Friendslist friends ={friends} 
        selectedfriend={selectedfriend}
        onselection={Handleselection} />
{nigga  && <Formaddfriend onAddFriend={HandleaddFriend} />}
 <Button onClick={Handlebussy}>{nigga ?  "close" :  "ADD Friend"}</Button>
 
    </div>
  { selectedfriend && <Formsplitbill selectedfriend={selectedfriend} onselection={Handleselection} onsplitbull={Handlespitbull}  />}
</div>
    );
}

function Friendslist({friends,onselection,selectedfriend}){

return(
    <ul> {friends.map((friend)=> ( <Friend friend= {friend} key={friend.id}
        selectedfriend={selectedfriend}
    onselection={onselection}/>))} </ul>
);
}
 
function Friend({friend, onselection,selectedfriend}){
    
    const isSelected = selectedfriend?.id === friend.id;
    
    return(
        
  <li className={isSelected ? "selected" : ""}> <img src={friend.image}  alt={friend.name} /> 
       <h3>{friend.name}</h3> 
       
       {friend.balance < 0 && (
        <p className='red'>
            you owe {friend.name}  {Math.abs(friend.balance)}  naira
        </p>)}

        {friend.balance > 0 && (
        <p className='green'>
         {friend.name} owes you   {Math.abs(friend.balance)}naira
        </p>
        )}

        {friend.balance === 0 && 
        <p>you and {friend.name}are even
        </p>}
  
  <Button onClick={() => onselection(friend)}>{isSelected ? "close" : "select"} </Button>
       </li>
    );

}

  function Formaddfriend({onAddFriend}){

    const [name,setName] = useState("");
    const [image,setImage] = useState("https://i.pravatar.cc/48?u=499476");


    function Handlesubmit(e){
        e.preventDefault();
       
        if (!name || !image) return;

const id = crypto.randomUUID();
        const newfriend = { 
            id,  
            name,
            image:`${image}?=${id}`,
            balance:0,
            };

           onAddFriend(newfriend);
            setName("");
            setImage("https://i.pravatar.cc/48?u=499476")
    }
    return(
        <form className='form-add-friend' onSubmit={Handlesubmit}>
            <label> Friend name </label>
            <input type='text'
             value={name}
            onChange={(e)=> setName(e.target.value)}/>
            
            <label> image URL</label>
            <input type='text'
            value={image}
            onChange={(e)=> setImage(e.target.value)}/>

            <Button>Add</Button>
        </form>
    );
  }


  function  Formsplitbill({selectedfriend,onsplitbull}){

const [bill,setBill] = useState("");
const [paidbyuser,setPaidbyuser] = useState('');
const paidbyfriend = bill ? bill - paidbyuser : "";
const [whoispaying,setWhoispaying]= useState("user");

function Handlesubmit(e){
    e,preventDefault();

    if (!bill || !paidbyuser) return;
    onsplitbull(whoispaying === "user" ? paidbyfriend : -paidbyuser); 
}

      return(
        <form className='form-split-bill' onSubmit={Handlesubmit}>
            <h2>spilt ball with {selectedfriend.name} </h2>

            <label>bill value</label>
            <input type='text' onChange={(e)=> setBill( Number(e.target.value))}></input>

             <label>your expenses</label>
            <input type='text'  value={paidbyuser} onChange={(e)=> setPaidbyuser(Number(e.target.value) > bill ? paidbyuser : Number(e.target.value))} ></input>
            
 <label> {selectedfriend.name} expenses</label>
            <input type='text' disabled  value={paidbyfriend}
            ></input>
            

<label>who is paying the bill </label>
            <select   value={whoispaying} onChange={(e)=> setWhoispaying(e.target.value)} >
                <option value="user">You</option>
                <option value="friend">{selectedfriend.name}</option>

            </select>
            

        </form>
      );
  }

export default App