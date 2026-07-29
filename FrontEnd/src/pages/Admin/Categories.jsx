import CommonPage from "../../components/Commmon/CommonPage.jsx";
import style from '../../assets/styles/Admin.module.css';
import Button from "../../components/Button.jsx";

import {Trash ,SquarePen} from "lucide-react";


import { useState,useEffect } from "react";

import API  from "../../API/axios.js";

// Services
import { getAll,addCategory,setDelete } from '../../Services/CategoriesService.jsx';


export default function Categories({setModalAdd,del,setCategory,edit}) {
   
        const [categories,setCategories] = useState([]);
    
       async function getAllCategories(){
            const res =  await getAll();
            
            setCategories(prev=>res.data.categories);
        }
        
        useEffect(function(){
            getAllCategories();
        },[]);

        //allways refersh data
        useEffect(function(){
            getAllCategories();
        },[categories]);

    return (
        <CommonPage pageTitle="Categories"  btnContent="+ New Category"  setModalAdd={setModalAdd} >
           <thead className={style.headTable}>
                <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Action</td>
                </tr>
           </thead>

           <tbody className={style.tableBody}>
               { categories && //like if
                categories.map(category=>(
                    <tr  key={category.id}>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td className={style.actionColumn}>
                            <Button type={"button"} btnColor={"danger"} size={"sm"} actions={()=> del(category.id ,category.name)}>
                                <Trash size={16} />
                            </Button>

                            <Button type={"button"} btnColor={"outline-primary"} size={"sm"} actions={edit}>
                                <SquarePen size={16} />
                            </Button>
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
    );
}