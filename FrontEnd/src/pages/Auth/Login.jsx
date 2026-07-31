import style from "../../assets/styles/Login.module.css";
import CashierImg from "../../assets/imges/cashier2.png";
import { useState } from "react";
import { EyeClosed ,Eye } from 'lucide-react';
export default  function Login() {
    const [inputs,setInputs] = useState({
        "email":"",
        "pass":""
    });

    const [eyeClose, setEyeClose] =useState(true);

    function submit(e) {
        e.preventDefault();
        console.log(inputs.email);
        console.log(inputs.pass);
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

                <div  className={style.msgAlert} >
                       <span>
                        You entered wrong Password and Email
                       </span>
                </div>
                

                <div className={style.box}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required  onChange={getInputsData}  placeholder="Enter Your Email" />
              
                </div>

                <div className={style.box}>
                    <label htmlFor="email">Email</label>
                    <input type={eyeClose?"password":"text"} name="pass" id="email" required  onChange={getInputsData}  placeholder="Enter Your Password" />

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