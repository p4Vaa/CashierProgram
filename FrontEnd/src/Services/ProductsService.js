import API from "../.../../API/axios.js";

export  const allProducts = ()=>{
    return API.get("/admin/products");
}

export const getOnlyCategories =  ()=>{
    return API.get("/admin/getCategories");
}

export const addProduct =(data)=>{
    return API.post("/admin/product/add",data);
}

export const deleteProduct =(id)=>{
    return API.delete(`/admin/product/delete/${id}`);
}

export const getProduct =(id)=>{
    return API.get(`/admin/product/${id}`);
}


export const edit  =  (data)=>{
    console.log(data.id)
    return API.put(`/admin/product/update/${data.id}`,data);
}