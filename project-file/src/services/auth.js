import axios from "axios";
import api from "../configs/api";

const register = (user , pass)=>{        
    return  axios.post("http://localhost:3000/auth/register", {
            "username": `${user}`,
            "password": `${pass}`
          } );
        
       
    
        }
const login = (user , pass)=>{
    try{
        const response =  api.post("http://localhost:3000/auth/login", {
            "username": `${user}`,
            "password": `${pass}`
          } );
         
        return {response}
    }catch(error){
        return {error}
    }
}
export{register,login}