import axios from "axios";
import api from "../configs/api";

const register = async(user , pass)=>{
    try{
        const response = await api.post("http://localhost:3000/auth/register", {
            "username": `${user}`,
            "password": `${pass}`
          } );
        
        return {response}
    }catch(error){
        return {error}
    }
}

const login = async(user , pass)=>{
    try{
        const response = await api.post("http://localhost:3000/auth/login", {
            "username": `${user}`,
            "password": `${pass}`
          } );
         
        return {response}
    }catch(error){
        return {error}
    }
}
export{register,login}