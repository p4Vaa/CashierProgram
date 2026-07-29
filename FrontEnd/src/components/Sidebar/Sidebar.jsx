import style from "./Sidebar.module.css";
import SidebarIcon from "./SidebarIcon.jsx";
import SidebarMenu from "./SidebarMenu.jsx";
import User from "./Profile/User.jsx";
import Setting from "./Profile/SettingProfile.jsx";
import { useState } from "react";
function Sidebar() {
    const [isOpen,setIsOpen] = useState(true);
    const [profileOpen,setProfileOpen] = useState(false);
    return(
        <div className={`${style.sidebar} ${isOpen? style.sidebarShow: style.sidebarHide} `}>
            <SidebarIcon setIsOpen={setIsOpen}  isOpen={isOpen} />
            <SidebarMenu  isOpen={isOpen}/>
            <User isOpen={isOpen} profileOpen={profileOpen} setProfileOpen={setProfileOpen}/>
           { profileOpen? <Setting  />:""}
        </div>
    );
}
export default Sidebar;