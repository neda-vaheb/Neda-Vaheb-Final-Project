import api from "../configs/api"

const getProfile =async ()=>{
    return api.get("user/whoami").then(res=>res || false)
  }

