import style from "../Sidebar.module.css"
import Item from "./ProfileOption.jsx";
import {UserRoundPen,Settings,LogOut,Bell} from "lucide-react";

export default function ProfileMenu() {
    return(
        <ul className={style.profileMenu}>
                <Item  path="/cashier/admin/profile" text="Profile" icon={UserRoundPen} />
                <Item  path="/cashier/admin/setting" text="Setting" icon={Settings} />
                <Item  path="/cashier/admin/notification" text="Notification" icon={Bell} />
                <Item  path="/cashier/admin/logout" text="Logout" icon={LogOut} />            
        </ul>
    );
}