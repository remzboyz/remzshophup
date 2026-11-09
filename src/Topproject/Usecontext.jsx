import { useContext } from "react";
import {CartContext} from "./Cartconext.jsx"


   export  function  useCart(){
    return useContext (CartContext);
   }