import style from "../../assets/styles/register.module.css"
import cashierImgPath from "../../assets/imges/cashier2.png";
import adminImgPath from "../../assets/imges/admin.png";
import {EyeClosed ,Eye  ,ArrowLeft} from "lucide-react";
import { useState } from "react";
import {Link}  from "react-router-dom"
import { successMessage } from "../../utils/alerts.js";
import {register} from "../../Services/AuthService.js";
export default function Register() {
    const [eyeClose,setEyeClose] = useState(true);
    const [eyeClosed,setEyeClosed] = useState(true);
    const [isCashier,setIsCashier] = useState(true);

    const [data,setData] =useState({
        "name":"",
        "email":"",
        "password":"",
        "role":"Cashier",
    
    });

  async  function submitForm(e){
        e.preventDefault();
        const res = await register(data);
        if (res) {
            successMessage("Account Successfuly Create...");
            setData(prev=>({
                    "name":"",
                    "email":"",
                    "password":"",
                    "role":"Cashier",
                }));
        }
        else{
            console.log("something bad Happened :{ ");
        }
    }

    function getData(e){
        setData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }));
    }

    function roleHandle(e){
        getData(e);
        if (e.target.value=="Admin") {
            setIsCashier(false);
        }else{
            setIsCashier(true);
        }
    }

    return (
        <div className={style.RegisterPage}>
            <Link  to="/admin/categories" className={style.myArrow} >
                <ArrowLeft />
            </Link>
            <form method="post" className={style.registerForm} onSubmit={submitForm}>
                <div className={style.imgDiv}>
                {isCashier?
                    <img src={cashierImgPath} /> : 
                    <img src={adminImgPath} />
                }
                </div>

                <div className={style.box}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={data.name} onChange={getData}   id="name" placeholder="Enter User name" required/>

                </div>
                
                <div className={style.box}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={data.email} onChange={getData}  placeholder="Enter User  Email" required/>
                </div>

                <div className={style.box}>
                    <label htmlFor="password">password</label>
                    <input type={eyeClose?"password":"text"} name="password"  onChange={getData }   value={data.password} id="password" placeholder="Enter User Password" required/>
                    <div className={style.eyeIcon} onClick={()=>setEyeClose(prev=>!prev)} >
                        {
                             eyeClose ?
                            <EyeClosed size={18} />  :
                            <Eye  size={18} />
                        }
                    </div>
                </div>

                <div className={style.box}>
                    <label htmlFor="confirmPassword">password</label>
                    <input type={eyeClosed?"password":"text"}  name="password" id="confirmPassword" placeholder="Enter Confirm Password" required/>
                    <div className={style.eyeIcon} onClick={()=>setEyeClosed(prev=>!prev)} >
                        {
                             eyeClosed ?
                            <EyeClosed size={18} />  :
                            <Eye  size={18} />
                        }
                    </div>

                </div>


                <div className={style.box}>
                    <label htmlFor="name">Role</label>
                    <select name="role"  value={data.role} onChange={roleHandle}>
                        <option value="Cashier">Cashier</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                
                <div className="btns d-flex gap-4">
                        <button type="button" className="btn btn-danger ">Clear</button>
                        <button type="submit" className="btn btn-success ">Create Account</button>
                </div>
            </form>
        </div>
    );

}