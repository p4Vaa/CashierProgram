import API from "../API/axios.js";

export  const register = (data)=>{
   return API.post("/register",data);
}

export const login = (data)=>{
    return API.post("/login",data);
}

export const llogout = ()=>{
    return API.post('/logout');
}