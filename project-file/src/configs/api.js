import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: { "Content-Type": "application/json" },
  });

  api.interceptors.request.use((request)=>{

    const accessToken = getCookie("token");
    
    if(accessToken){
      request.headers["Authorization"]=`bearer ${accessToken}`;
    }
    return request
    
    } , error => {
     return Promise.reject(error)
    });
    
    
    
  export default api;