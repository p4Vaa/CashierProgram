import style from "../../assets/styles/Login.module.css";
import CashierImg from "../../assets/imges/cashier2.png";
import { useState } from "react";
import { EyeClosed ,Eye } from 'lucide-react';
import  {login } from "../../Services/AuthService.js";
import {error500} from "../../utils/alerts.js";
import { useNavigate } from "react-router-dom";
export default  function Login() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({
        "email":"",
        "pass":""
    });

    const [errors,setErrors] = useState({
        "Alert":false  ,
        "redBorder":false,
        
    });
    const [eyeClose, setEyeClose] =useState(true);

 
    async  function submit(e) {
       try{
           e.preventDefault(); 
           const res =  await login(inputs);
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("user",JSON.stringify(res.data.user));
            if(res.data.user.role==="Admin")
                navigate('/admin/categories');
            else
                navigate('/cashier');
       }
       catch(error) {
            if(error.response){
                switch(error.response.status){
                    case 401:
                    setErrors(prev=>({
                            ...prev,
                            'Alert':false,
                            'redBorder':false
                        }));
                        setTimeout(function(){
                        setErrors(prev=>({
                            ...prev,
                            'Alert':true,
                            'redBorder':true
                        }));
                        },1000);
       
                    break;
                    case 500:
                        setErrors(prev=>({
                            // 'Alert':false,
                            'Alert':false,
                            'redBorder':false
                        }));
                    
                        error500();
                    break;
                }
            }
       }



    }

    function getInputsData(e) {
        setInputs(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }));
    }

    return (
        <div className={style.LoginPage}>
           <form className={style.loginForm} method="post" onSubmit={submit}>
                    
                <div className={style.ImgDiv}>
                    <img src={CashierImg} className={style.Img} />
                </div>

                { errors.Alert &&
                    <div  className={style.msgAlert} >
                        <span>
                            You entered wrong Password and Email
                        </span>
                    </div>
                    
                }

                <div className={style.box}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className={errors.redBorder?style.redBorder:""}  required  onChange={getInputsData}  placeholder="Enter Your Email" />
              
                </div>

                <div className={style.box}>
                    <label htmlFor="password">Password</label>
                    <input type={eyeClose?"password":"text"} name="pass" className={errors.redBorder?style.redBorder:""} id="email" required  onChange={getInputsData}  placeholder="Enter Your Password" />

                    <div className={style.eyeIcon} onClick={()=>setEyeClose(prev=>!prev)} >
                        {
                             eyeClose ?
                            <EyeClosed />  :
                            <Eye />
                        }
                    </div>

                </div>

                              
                <button  type="submit" className={style.Btn}  >
                    Login
                </button>
           </form>
        </div>
    );
}