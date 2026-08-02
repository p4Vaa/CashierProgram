import { useState,useEffect} from 'react';
import {  useLocation} from "react-router-dom";
import style from './Sidebar.module.css';
import SidebarItem from './SidebarItem.jsx';
import { LayoutDashboard ,Boxes ,Package, Settings,Trash ,UserPlus} from 'lucide-react';

export default function SidebarMenu({isOpen}) { 
    useEffect(() => {
    if (location.pathname === "/admin/categories") {
        setActive("Categories");
    } else if (location.pathname === "/admin/dashboard") {
        setActive("Dashboard");
    } else if (location.pathname === "/admin/products") {
        setActive("Products");
    }
}, [location.pathname]);

    //check which option is clicked
    const  [activeOption,setActive] =useState("");
    const user =  JSON.parse(localStorage.getItem("user"));
    const role  = user.role;
        
     
    return (
        <ul className={style.menu}>
            {
              role=="Admin" &&  
            <SidebarItem path="/admin/dashboard" 
                    icon={LayoutDashboard}
                    data="Dashboard"
                    isOpen={isOpen}
                    activeOption={activeOption}
                    setActive={setActive}
               />
            }
             {
              role=="Admin" &&   
            <SidebarItem path="/admin/categories" 
                    icon={Boxes}
                    data="Categories"
                    isOpen={isOpen}
                    activeOption={activeOption}
                    setActive={setActive}
               />
             }
              {
              role=="Admin" &&   
            <SidebarItem path="/admin/products" 
                    icon={Package}
                    data="Products"
                    isOpen={isOpen}
                    activeOption={activeOption}
                    setActive={setActive}
               />
              }
             {
            role=="Admin" &&   
            <SidebarItem path="/admin/recyclebin" 
                    icon={Trash}
                    data="recycle bin"
                    isOpen={isOpen}
                    activeOption={activeOption}
                    setActive={setActive}
               />
             }
            {
              role=="Admin" &&  
            <SidebarItem path="/register" 
                    icon={UserPlus}
                    data="Add User"
                    isOpen={isOpen}
                    activeOption={activeOption}
                    setActive={setActive}
               />

            }


        </ul>
    );   
}