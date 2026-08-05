import CommonPage from "../../../components/Commmon/CommonPage.jsx";
import Button from "../../../components/Button.jsx";

import style from '../../../assets/styles/Admin.module.css';

import {Trash ,SquarePen} from "lucide-react";


import { getAll,addCategory ,setDelete } from '../../../Services/CategoriesService.js';
import { useState,useEffect } from "react";
import  {successMessage ,failedMSG } from  "../../../utils/alerts.js";


import Swal from "sweetalert2";
import ModalUpdate from "./ModalUpdate.jsx";
import ModalAdd from "./ModalAdd.jsx";

export default function Categories({}) {


    const [addModal,setAddModal]=useState(false);
    const [updModal,setUpdModal]=useState(false);

    const [categories,setCategory] = useState([]);

    const [inputData,setInputData] = useState(
        {
            id:Number,
            name:"",
            description:""
        }
    );



    useEffect(function(){
        getAllCategories();
    },[]);

    async function getAllCategories(){
        const res =  await getAll();
        setCategory(prev=>res.data.categories);
    }
    
    function getInputData(e) {
        setInputData(prev=>({
            ...prev ,
            [e.target.name]:e.target.value
        }));
    }
    
    function clearForm(){
        setInputData(prev=>({
            name:"",
            description:""
        }));
    }
 
    function deleteCategory(id,category) {
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
                    getAllCategories();
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
                        failedMSG("Failed to delete the category");
                    }
                }
                else{
                    failedMSG("Failed to delete the category");
                }
            });
        }
    

    return (
        <>
            <CommonPage pageTitle="Categories" pageDes="Manages All Available Categories"  btnContent="+ New Category" setAddModal={setAddModal}  >
            <thead className={style.headTable}>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Action</td>
                    </tr>
            </thead>

            <tbody className={style.tableBody}>
                {categories && 
                    categories.map(category=>(
                    <tr  key={category.id}>
                        <td>{category.name}</td>
                        <td>{category.description}</td>

                        <td className={style.actionColumn}>
                            <Button type={"button"} btnColor={"danger"} size={"sm"} actions={()=> deleteCategory(category.id ,category.name)}>
                                <Trash size={16} />
                            </Button>

                            <button type="button" className="btn btn-success accordion btn-sm"
                                 onClick={()=>{
                                    setInputData(prev=>({
                                        id:category.id ,
                                        name:category.name ,
                                        description:category.description
                                    }));
                                    setUpdModal(true); 
                                    }}>
                                <SquarePen size={16} />
                            </button>
                        </td>
                    </tr>
                    ))}
                
                {
                    categories.length==0 && 
                    <tr className={style.NoRecord}>
                        <td>
                            There are no recorded
                        </td>
                    </tr>
                }     
            </tbody>
            </CommonPage>
                
            {  
                addModal &&
                <ModalAdd
                    getAllCategories={getAllCategories}
                    clearForm={clearForm} 
                    setAddModal={setAddModal}  
                    getInputData={getInputData}
                    inputData={inputData} 
                />
            }

            {
                updModal &&
                <ModalUpdate 
                    getAllCategories={getAllCategories}
                    clearForm={clearForm}
                    getInputData={getInputData}
                    inputData={inputData} 
                    setInputData={setInputData} 
                    setUpdModal={setUpdModal}
                />

            }
            
        </>
       
    );
}