import { useState } from "react";
import style from "../Sidebar.module.css";
import {ChevronDown } from "lucide-react"
export default function User({isOpen,setProfileOpen,profileOpen}) {
    
    return (
        <button className={style.Profile}  onClick={()=>setProfileOpen(prev=>!prev)}>
            <div className={style.imgProfileDiv}>
                <img src="/src/assets/imges/boy.png" alt="profile"
                     className={style.imgProfile} />
            </div>
            <div className={isOpen?style.usrDiv:""}>
                <span className={`${style.usrname} ${isOpen? style.textshow:style.textHide} `}>Pavel</span>
                <span className={`${style.role} ${isOpen? style.textshow:style.textHide}`}>Admin</span>
            </div>
            <ChevronDown  className={`${style.btnProfileIcon} 
                                      ${isOpen? style.textshow:style.textHide}
                                      ${profileOpen? style.btnProfileIconUP:style.btnProfileIconDown}
                            `}/>
        </button>
    );
}  