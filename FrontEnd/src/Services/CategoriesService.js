// API
import API from "../API/axios.js";

export const getAll = ()=>{
    return API.get('/admin/categories');
}

export const addCategory = (data)=>{
    return API.post('/admin/category/add',data);
}
export const setDelete = (id)=>{
    return API.delete(`/admin/category/delete/${id}`,id);
}

export const updateCategory =  (category)=>{
    console.log(category.id);
    console.log(category);
    return API.put(`/admin/category/update/${category.id}`,category);
}