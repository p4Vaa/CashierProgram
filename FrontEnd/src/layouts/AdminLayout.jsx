// Components
import style from '../assets/styles/Admin.module.css';
import Sidebar from "../components/Sidebar/Sidebar.jsx";

// 
import {Routes ,Route ,Link} from "react-router-dom";
import { useState ,useEffect } from 'react';
import Button  from '../components/Button.jsx';


//pages
import Categories from '../pages/Admin/Categories.jsx';

// Modal
import Modal from "../components/Modal.jsx";
import Swal  from 'sweetalert2';

// Services
import {getAll, addCategory,setDelete } from '../Services/CategoriesService.jsx';


import { successMessage,cancleForm,failedMSG } from '../utils/alerts.js';

// ICON
import {X ,Save} from "lucide-react";
function AdminLayout() {

    const [modalAdd,setModalAdd]=useState(false);
    const [modalupd,setmodalupd]=useState(false);
    const [category,setCategory] = useState({"name":"","description":""});//sending data
    const [categoryUPD,setCategoryUPD] = useState({"name":"","description":""});//sending data

    function edit() {
        
    }

    function getInputDate(e) {
        setCategory(prev=>({
            ...prev ,
            [e.target.name]:e.target.value
        }));
    }
    function getInputDateUPD(e) {
        setCategoryUPD(prev=>({
            ...prev ,
            [e.target.name]:e.target.value
        }));
    }

    
    function del(id,category) {
        Swal.fire({
            title:"Confirmation" ,
            text:`Do You wanna delete Category #${id} ${category}? `,
            icon:"question" ,
            showCancelButton:true ,
            cancelButtonText:"No, Keep it" ,
            cancelButtonColor:"green" ,

            confirmButtonText:"Delete" ,
            confirmButtonColor:"red" ,
        }).then(async (result)=>{
            
            if (result.isConfirmed) {
                const res = await setDelete(id);
                if (res.data.success) {
                    Swal.fire({
                    toast:true,
                    icon:"success",
                    timer:2500,
                    position:"top-right",
                    title:"Category successfully deleted...",
                    showConfirmButton:false,
                    timerProgressBar:true ,
                    
                });
                } 
                else {
                    failedMSG("The Process Failed");
                }
                
            }
            else{
                failedMSG("The Process Failed");
            }
        });
    }

    function clearInputADDForm(){
            setCategory(prev=>({
                name:"",
                description:""
            }));
    }
    
    async function submitForm(e) {
            e.preventDefault();
            const res  =  await addCategory(category);
            setModalAdd(prev=>!prev);
            clearInputADDForm();
            successMessage("Category added seccussfully");
        }
    async function submitFormUPD(e) {
            e.preventDefault();
            const res  =  await addCategory(category);
            setModalAdd(prev=>!prev);
            clearInputADDForm();
            successMessage("Category added seccussfully");
        }

    return (
            <div className={style.AdminLayout}>
                <Sidebar />
                
                <Routes>
                    <Route path="/admin/categories" element={<Categories setModalAdd={setModalAdd} del={del}  
                        edit={edit}
                    setCategory={setCategory}  />} />
                    <Route path="/admin/products" element="" />
                    <Route path="/admin/dashboard" element="" />
                </Routes>

                {
                    modalAdd &&
                    <Modal>
                        <form className={style.formADD} method='POST'>
                            <div className={style.headAddBox}>
                                <h4>Add Category</h4>
                                <span>Create a new Product catagory</span>
                                <X className={style.IconClose}   onClick={()=>cancleForm({setModalAdd})} />
                            </div>
                            
                            <div className={style.formInputs}>
                                <div className={style.eachRow}>
                                    <label htmlFor='name' >Name</label>
                                    <input  onChange={getInputDate} value={category.name} placeholder='e.g. Clothes' id='name' name='name'/>
                                </div>
                                
                                <div className={style.eachRow}>
                                    <label htmlFor='Description' >Description</label>
                                    <textarea onChange={getInputDate} name='description' value={category.description} 
                                        id='Description'
                                        placeholder='Short desciption of what belongs in this category'/>
                                </div>
                            </div>
                            
                            <div className={style.btnAdds}>
                            
                                <Button btnColor="danger" size="sm" type="button" actions={()=>cancleForm({setModalAdd}) } >
                                        Cancle
                                </Button> 
                                
                                <Button btnColor="primary" size="sm" type="submit" actions={submitForm}>
                                        <Save  size={18}/> 
                                        Save 
                                </Button>

                            </div>

                        </form>
                    </Modal>
                }

                {/* {
                    modalupd &&
                <Modal>
                    <form className={style.formADD} method='POST'>
                        <div className={style.headAddBox}>
                            <h4>Add Category</h4>
                            <span>Create a new Product catagory</span>
                            <X className={style.IconClose}   onClick={()=>cancleForm({setModalAdd})} />
                        </div>
                        
                        <div className={style.formInputs}>
                            <div className={style.eachRow}>
                                <label htmlFor='name' >Name</label>
                                <input  onChange={getInputDate} value={category.name} placeholder='e.g. Clothes' id='name' name='name'/>
                            </div>
                            
                            <div className={style.eachRow}>
                                <label htmlFor='Description' >Description</label>
                                <textarea onChange={getInputDate} name='description' value={category.description} 
                                    id='Description'
                                    placeholder='Short desciption of what belongs in this category'/>
                            </div>
                        </div>
                        
                        <div className={style.btnAdds}>
                          
                            <Button btnColor="danger" size="sm" type="button" actions={()=>cancleForm({setModalAdd}) } >
                                    Cancle
                            </Button> 
                            
                             <Button btnColor="primary" size="sm" type="submit" actions={submitForm}>
                                    <Save  size={18}/> 
                                    Save 
                            </Button>

                        </div>

                    </form>
                </Modal>
                } */}
            
            </div>
    );
}

export default AdminLayout;