import style from "../Sidebar.module.css"
import Item from "./ProfileOption.jsx";
import {UserRoundPen,Settings,LogOut,Bell} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import {llogout} from "../../../Services/AuthService.js"
export default function ProfileMenu() {
        
    const navigate =  useNavigate();
    async function logout(){
        try{
            await llogout();
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate('/login');

        }catch(error){
            console.log(error);
        }
    }
    return(
        <ul className={style.profileMenu}>
                <Item  path="/cashier/admin/profile" text="Profile" icon={UserRoundPen} />
                <Item  path="/cashier/admin/setting" text="Setting" icon={Settings} />
                <Item  path="/cashier/admin/notification" text="Notification" icon={Bell} />
                <Item  path="/cashier/admin/logout" text="Logout" icon={LogOut}  onClick={logout} />            
        </ul>
    );
}