import axios from "axios";
import { getCookie } from "../utiles/cookie";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: { "Content-Type": "application/json" },
  });

  api.interceptors.request.use((request)=>{

    const Token = getCookie();
    
    if(Token){
      request.headers["Authorization"]=`bearer ${Token}`;
    }
    return request
    
    } , error => {
     return Promise.reject(error)
    });
    
api.interceptors.response.use((response)=>{
    return response
  } , (error)=>{
    return Promise.reject(error)
  })
    
    
  export default api;