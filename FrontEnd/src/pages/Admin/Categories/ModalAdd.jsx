import { X , Save} from "lucide-react";
import Button  from '../../../components/Button.jsx';
import Modal from "../../../components/Modal.jsx";
import style from "./category.module.css";

import { addCategory } from "../../../Services/CategoriesService.js";
import  {successMessage ,failedMSG ,cancleForm} from  "../../../utils/alerts.js";

export default function ModalAdd({getInputData,clearForm,inputData,setAddModal,getAllCategories}) {
   
    async function submitAddForm(e) {
        e.preventDefault();
        const res  =  await addCategory(inputData);
        await getAllCategories();
        setAddModal(false);
        clearForm();
        if (res.data.success) {
            successMessage("Category added seccussfully");
        }
        else {
            failedMSG('Failed to Added Category');
        }
        
    }



    return(
        <Modal>
            <form className={style.formADD} method='POST'>
                <div className={style.headAddBox}>
                    <h4>Add Category</h4>
                    <span>Create a new Product catagory</span>
                    <X className={style.IconClose}  onClick={()=>cancleForm(setAddModal,"addModal")
                    }/>
                </div>
                
                <div className={style.formInputs}>
                    <div className={style.eachRow}>
                        <label htmlFor='name' >Name</label>
                        <input  onChange={getInputData} value={inputData.name} placeholder='e.g. Clothes' id='name' name='name'/>
                    </div>
                    
                    <div className={style.eachRow}>
                        <label htmlFor='Description' >Description</label>
                        <textarea onChange={getInputData} name='description' value={inputData.description} 
                            id='Description'
                            placeholder='Short desciption of what belongs in this category'/>
                    </div>
                </div>
                
                <div className={style.btnAdds}>
                
                    <Button btnColor="danger" size="sm" type="button" actions={()=>cancleForm(setAddModal,"addModal") } >
                            Cancle
                    </Button> 
                    
                    <Button btnColor="primary" size="sm" type="submit" actions={submitAddForm}>
                            <Save  size={18}/> 
                            Save 
                    </Button>

                </div>

            </form>
        </Modal>
    );  
}