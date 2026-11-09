import { useState } from "react";

// the object 
const messages = [
    "learn React *",
    "Apply for jobs.",
    "invest your new income"
];


// app homponent
function App(){
     return(
        <>
     <Steps/>

     <StepMessages step={1}>
       <p>pass in content</p>
     <p></p></StepMessages>

      <StepMessages step={2}>
       <p>read child props </p>
     <p></p></StepMessages>  


     
     </>
     );
     function Steps(){
         const [step,setStep] = useState(1);
         const [isopen,setIsopen] = useState(true);
         // const [test,setTest] = useState({name : "jonas"});
     function handlePrevious(){
      if(step > 1) setStep((s)=> s-1 );
     
     }
     
     function handleNext(){
      if (step <3) setStep((s) => s+1)
         // setStep((s) => s+1);
     //  setTest ({ name:"Fred"});
     }
     return (
     
     <div>
         <button className='close'  onClick={() => setIsopen ( (is)=> !is)}> &times;</button>
     
         {isopen &&(
         <div className='steps'>
             <div className='numbers'>
                 <div className={`${ step >= 1 ? 'active' : ""}`}>1</div>
                 <div className={`${ step >= 2 ? 'active' : ""}`}>2</div>
                 <div className={`${ step >= 3 ? 'active' : ""}`}>3</div>
             </div>
     
     
          

             <StepMessages step={step}>{messages[step-1]}
              <div className="buttons">
                <Button bgcolor></Button>
              </div>
             </StepMessages>


             <div className='buttons'>
                 <Button
                  bgcolor ="#7950f2"
                  textcolor= "#fff" 
                  onClick={handlePrevious} 
                  > <span>👈</span> Previous   </Button> 
                      <Button
                  bgcolor ="#7950f2"
                  textcolor= "#fff" 
                  onClick={handleNext} >      
                  <span>👉</span> Next</Button> 
             
             </div>
         </div>
     )
     }
     </div>
     );
     }
     
}

function StepMessages({step,children}) {
return(
  
             <p className='message'> <h3>step{step}</h3> {children}
                 {/* {test.name} */}
             </p>);
}

function  Button({textcolor,bgcolor,onClick,children}){
  return(
    <button style={{backgroundColor:bgcolor, color:textcolor}} onClick={onClick}> 

       {children} </button>
  );
  
}

export default App


