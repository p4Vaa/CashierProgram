//components
import CommonPage from "../../../components/Commmon/CommonPage";
import style from "../../../assets/styles/Admin.module.css"
import stylePr from "../../../assets/styles/Product.module.css"
import Modal  from "../.../../../../components/Modal.jsx";
import Inputs from "../../../components/Inputs.jsx"; 
import Select from "../../../components/Select.jsx"; 
import { useEffect ,useState} from "react";
import {SquarePen ,Trash} from "lucide-react"
import {cancleForm,failedMSG,successMessage,failedAlert} from "../../../utils/alerts.js";
import Button from "../../../components/Button.jsx"
import Swal from "sweetalert2";
//service 
import { allProducts  ,getOnlyCategories ,addProduct, deleteProduct, getProduct ,edit} from "../../../Services/ProductsService";
export default  function Products(){
    const [addModal,setAddModal] =useState(false);
    const [updModal,setUpdModal] =useState(false);
    const [products,setProducts] = useState([]); 
    const [categories,setCategories] = useState([]); 
    const [error,setError] =useState({
        "barCode":"",
        "name":"",
        "category_id":"",
        "unit":"",
        "costPrice":"",
        "sellPrice":"",
        "stockQuantity":"",
    });

    const [inputs ,setInputs] =useState({
        "id":"",
        "barCode":"",
        "name":"",
        "category_id":"6",
        "unit":"",
        "costPrice":"",
        "sellPrice":"",
        "stockQuantity":"",
    });

    function getInputs(e){
        setInputs(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }));
    }
    
    async function getCategoies(){
        const res = await getOnlyCategories();
        setCategories(res.data.categories)
    }
    
    async function loadAllProduct(){
        try{
            const res = await allProducts();
            if(res.data.status!="success"){
                 console.log('something bad happened');
            }
            setProducts(res.data.products);
         } catch(error){
            console.log(error)
        }
    }
    

    useEffect(()=>async function(){
            loadAllProduct();
            getCategoies();
        

    },[]);
    
   async function handleEdit(id){
        if (isNaN(id) || id<0) {
            failedAlert("Something going wrong try again latter");
        }
       const res =  await getProduct(id);
       if(res.data.status =="error"){
         failedAlert("There are no product by this ID");
         return ;
       }
       setInputs(prev=>res.data.product);
       setUpdModal(prev=>true);
    }
    
    async function submitForm(e) {
        try{
            e.preventDefault();
            const res = await addProduct(inputs);
            if(res.data.status =="success"){
                setAddModal(prev=>false);
                loadAllProduct();
                successMessage("Product Added Successfully");
                setInputs({}); 
                setError({});
            }
        }
        catch(error){
            if (error.response) {
                switch(error.response.status){
                    case 422:
                        setAddModal(prev=>true);
                        setError(error.response.data.errors);
                        break;
                    case 500:
                        failedAlert("Something bad Happen try again latter");
                        break;
                }
            }
        }
    }


     function delHandle(id,name) {
        Swal.fire({
            title:"Confirmation",
            text:`Do you wanna delete #${id} - ${name} .? `,

            confirmButtonColor:'red',
            confirmButtonText:'delete it',

            showCancelButton:true,
            cancelButtonColor:'green',
            cancelButtonText:'no,keep it',
            icon:"question"
        }).then(async (res)=>{
            if(res.isConfirmed){
               const res= await deleteProduct(id);
               if(res.data.status=="success"){
                successMessage("Product delete successfuly");
                loadAllProduct();

            }
            }
            else{
                failedMSG("failed to Delete Product");
            }
        });        
    }

    async function submitFormUpd(e) {
        try{
            e.preventDefault();
            const res = await edit(inputs);
            console.log(res.data.status)
            if(res.data['status'] == "success"){
                setUpdModal(prev=>false);
                loadAllProduct();
                successMessage("Product updated Successfully");
                setInputs({});
                setError({});
            }
        }
        catch(error){
            if (error.response) {
                switch(error.response.status){
                    case 422:
                        setUpdModal(prev=>true);
                        setError(error.response.data.errors);
                        break;
                    case 500:
                        failedAlert("Something bad Happen try again latter");
                        break;
                }
            }
        }
    }



    return (
        <>
            <CommonPage  pageTitle="Products" pageDes="Manages All Available Products" btnContent="+ new Product" setAddModal={setAddModal}>
                <thead className={style.headTable}>
                    <tr>
                        <th>Barcode</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>unit</th>
                        <th>Cost Price</th>
                        <th>Sell Price</th>
                        <th>Stock Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className={style.tableBody}>
                    {
                        products?
                        products.map(product=>(
                            <tr key={product.id} className={
                                product.stockQuantity>=10?stylePr.highStock:
                                (product.stockQuantity<=0?stylePr.lowStock:stylePr.warningStock)}>

                                <td>{product.barCode}</td>
                                <td>{product.name}</td>
                                <td>{product.category['name']}</td>
                                <td>{product.unit}</td>
                                <td>{product.costPrice} IQD</td>
                                <td>{product.sellPrice} IQD</td>
                                <td>{product.stockQuantity}</td>
                                <td className={style.actionColumn}>
                                    <Button type={"button"} btnColor={"danger"} size={"sm"} actions={()=>delHandle(product.id,product.name)}>
                                        <Trash size={16} />
                                    </Button>

                                    <button type="button" className="btn btn-success accordion btn-sm"
                                        onClick={()=>  handleEdit(product.id)  }>
                                        <SquarePen size={16} />
                                    </button>
                                </td>

                            </tr>
                        )) :
                        <tr className={style.NoRecord}>
                            <td>
                                There are no recorded
                            </td>
                        </tr>
                    }
                </tbody>
            </CommonPage>
          
            {  addModal &&
                <Modal>
                    <form  className={stylePr.addProductForm} method="POST" action="/admin/product/add"  onSubmit={submitForm}>
                        <h4>Add Product</h4>
                        <span className="text-muted">Fill in the form for adding  new Product</span>
                        <div className={stylePr.box}>
                            <Inputs type="text" labelTxt="barCode"id="" name="barCode" val={inputs.barCode} onChange={getInputs} placeHolder="#1233455">
                                {error.barCode?error.barCode[0]:""}
                            </Inputs>
                        
                            <Inputs type="text" labelTxt="Product Name"id="" name="name" val={inputs.name} onChange={getInputs}  placeHolder=" Enter Product Name">
                                {error.name?error.name[0]:""}
                            </Inputs>
                        </div>

                        <div className={stylePr.box}>
                            <Select labelTxt="Category" name="category_id"id="" val={inputs.categoryID} onChange={getInputs}>
                                    <option  value="-1" >select option</option>
                                {
                                    categories.map(category=>(
                                        <option key={category.id} value={category.id} >{category.name}</option>
                                    ))
                                }
                            </Select>
                            <Inputs type="text" labelTxt="Unit" id="" name="unit" val={inputs.unit} onChange={getInputs}  placeHolder="Kg,mL,Meter">
                                {error.unit?error.unit[0]:""}
                            </Inputs>
                        </div>

                        <div className={stylePr.box}>
                            <Inputs type="text" labelTxt="Cost Price" id="" name="costPrice" val={inputs.costPrice} onChange={getInputs} placeHolder="Enter cost price">
                                {error.costPrice?error.costPrice[0]:""}
                            </Inputs>
                            <Inputs type="text" labelTxt="Sell Price" id="" name="sellPrice" val={inputs.sellPrice} onChange={getInputs} placeHolder="Enter sell price">
                            {error.sellPrice?error.sellPrice[0]:""}
                            </Inputs>
                        </div>

                        <div className={stylePr.box}>
                            <Inputs type="number"  labelTxt="Stock Quantity" id="" name="stockQuantity" val={inputs.stockQuantity} onChange={getInputs} placeHolder="Enter Quantity">
                            {error.stockQuantity?error.stockQuantity[0]:""}
                            </Inputs>
                        </div>

                        <div className={stylePr.divBtn}>
                            <button className="btn btn-danger btn-sm " type="button" onClick={()=>{cancleForm(setAddModal,"addModal",setError); }}>Cancel</button>
                            <button className="btn btn-primary btn-sm " type="submit">Create</button>
                        </div>
                    </form>
                </Modal> 
            }   
            
            { 
                 updModal &&
                <Modal>
                    <form  className={stylePr.addProductForm} method="POST"   onSubmit={submitFormUpd}>
                        <h4>Update Product</h4>
                        <span className="text-muted">Fill in the form for updating Product</span>
                        <div className={stylePr.box}>
                            <Inputs type="text" labelTxt="barCode"  id="" name="barCode" val={inputs.barCode} onChange={getInputs} placeHolder="#1233455">
                                {error.barCode?error.barCode[0]:""}
                            </Inputs>
                        
                            <Inputs type="text" labelTxt="Product Name"  id="" name="name" val={inputs.name} onChange={getInputs}  placeHolder=" Enter Product Name">
                                {error.name?error.name[0]:""}
                            </Inputs>
                        </div>

                        <div className={stylePr.box}>
                            <Select labelTxt="Category" name="category_id" id="" val={inputs.categoryID} onChange={getInputs}>
                               
                                    <option  id="" value="-1"  >Select option</option>
                                {
                                    categories.map(category=>(
                                        <option key={category.id} id="" value={category.id} >{category.name}</option>
                                    ))
                                }
                                
                            </Select>
                            <Inputs type="text" labelTxt="Unit" id="" name="unit" val={inputs.unit} onChange={getInputs}  placeHolder="Kg,mL,Meter">
                                {error.unit?error.unit[0]:""}
                            </Inputs>
                        </div>

                        <div className={stylePr.box}>
                            <Inputs type="text" id="" labelTxt="Cost Price" name="costPrice" val={inputs.costPrice} onChange={getInputs} placeHolder="Enter cost price">
                                {error.costPrice?error.costPrice[0]:""}
                            </Inputs>
                            <Inputs type="text" labelTxt="Sell Price" id=""  name="sellPrice" val={inputs.sellPrice} onChange={getInputs} placeHolder="Enter sell price">
                            {error.sellPrice?error.sellPrice[0]:""}
                            </Inputs>
                        </div>

                        <div className={stylePr.box}>
                            <Inputs type="number"  labelTxt="Stock Quantity" id="" name="stockQuantity" val={inputs.stockQuantity} onChange={getInputs} placeHolder="Enter Quantity">
                            {error.stockQuantity?error.stockQuantity[0]:""}
                            </Inputs>
                        </div>

                        <div className={stylePr.divBtn}>
                            <button className="btn btn-danger btn-sm " type="button" onClick={()=>{cancleForm(setUpdModal,"updateModal",setError); }}>Cancel</button>
                            <button className="btn btn-primary btn-sm" type="submit" >Save</button>
                        </div>
                    </form>
                </Modal> 
            }
        </>
        
    );   
}