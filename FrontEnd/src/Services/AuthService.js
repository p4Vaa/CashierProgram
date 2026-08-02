import API from "../API/axios.js";

export  const register = (data)=>{
    console.log(data)
   return API.post("/register",data);
}