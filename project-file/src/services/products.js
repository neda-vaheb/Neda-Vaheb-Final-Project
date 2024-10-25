import api from "../configs/api";

const getAllProducts = ()=>{
    return api.get("/products");
  }
  export {getAllProducts}