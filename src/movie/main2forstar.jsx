import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './movie.css'

import Starrating  from './Starrating.jsx'
function Test(){

  return(
    <div>
      <Starrating color='blue' maxrating={10} />
      <o>this movie is rated x stars</o>
    </div>
  );

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Starrating maxrating = {5} messages={["Terrible","Bad","Okay","Good","Amazing"]} />
    <Starrating size={24} color='green' className="test" defaultRating={3}  />
  <Test/>
  </StrictMode>,

)