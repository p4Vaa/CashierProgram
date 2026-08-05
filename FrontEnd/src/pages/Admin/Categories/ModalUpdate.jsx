import style from "./category.module.css";
import Modal from "../../../components/Modal.jsx";
import Button from "../../../components/Button.jsx"
import { X , SavePlus ,PencilSparkles} from "lucide-react";
import {cancleForm,successMessage , failedMSG} from "../../../utils/alerts.js";
import { updateCategory } from "../../../Services/CategoriesService";

export default function ModalUpdate({getAllCategories,clearForm,getInputData,setInputData,inputData,setUpdModal}) {
    
    
    function getInputData(e) {
        setInputData(prev=>({
            ...prev ,
            [e.target.name]:e.target.value
        }));    
    }
  
   async function submitUpdForm(e) {
        e.preventDefault();
        const res = await updateCategory(inputData);
        setUpdModal(false);
        await getAllCategories();
        clearForm();
        if(res.data.success){
            successMessage("Category Updated successfully..");
            return;
        }
        failedMSG("Failed to Updated Category")
    }
  
    return (
        <Modal>
            <form className={style.formADD} method='POST'>
                <div className={style.headAddBox}>
                    <h4>
                        <div className={style.editBox}>
                        <PencilSparkles size={14} />
                        </div>
                        Update Category
                    </h4>
                    <span>Fill in the form To update Catagory</span>
                    <X className={style.IconClose}   onClick={()=>cancleForm(setUpdModal,"updateModal")} />
                </div>
                
                <div className={style.formInputs}>
                    <div className={style.eachRow}>
                        <label htmlFor='name' >Name</label>
                        <input  onChange={getInputData}  placeholder='e.g. Clothes' value={inputData.name} id='nameUPD' name='name'/>
                    </div>
                    
                    <div className={style.eachRow}>
                        <label htmlFor='Description' >Description</label>
                        <textarea onChange={getInputData} name='description'  
                        value={inputData.description}
                            id='DescriptionUPD'
                            placeholder='Short desciption of what belongs in this category'/>
                    </div>
                </div>
                
                <div className={style.btnAdds}>
                
                    <Button btnColor="danger"  size="sm" type="button"  actions={()=>cancleForm(setUpdModal,"updateModal") } 
                        // data-name={}
                    >
                            Cancle
                    </Button> 
                    
                    <Button btnColor="primary" size="sm" type="submit" actions={submitUpdForm}>
                            <SavePlus  size={18}/> 
                            Update 
                    </Button>

                </div>

            </form>
        </Modal>
    );

} 