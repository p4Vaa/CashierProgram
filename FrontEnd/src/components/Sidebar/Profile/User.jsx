import { useState } from "react";
import style from "../Sidebar.module.css";
import {ChevronDown } from "lucide-react"
import cashierImg from "../../../assets/imges/cashier2.png";
import adminImg from "../../../assets/imges/admin3.png";

export default function User({isOpen,setProfileOpen,profileOpen}) {
    const user = JSON.parse(localStorage.getItem("user"));
    const imgPath =user.role=="Admin"?adminImg:cashierImg;
     return (
        <button className={style.Profile}  onClick={()=>setProfileOpen(prev=>!prev)}>
            <div className={style.imgProfileDiv}>
                <img src={imgPath} alt="profile"
                     className={style.imgProfile} />
            </div>
            <div className={isOpen?style.usrDiv:""}>
                <span className={`${style.usrname} ${isOpen? style.textshow:style.textHide} `}>{user.name}</span>
                <span className={`${style.role} ${isOpen? style.textshow:style.textHide}`}>{user.role}</span>
            </div>
            <ChevronDown  className={`${style.btnProfileIcon} 
                                      ${isOpen? style.textshow:style.textHide}
                                      ${profileOpen? style.btnProfileIconUP:style.btnProfileIconDown}
                            `}/>
        </button>
    );
}  