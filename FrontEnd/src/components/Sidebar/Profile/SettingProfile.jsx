import style from "../Sidebar.module.css";
import ProfileMenu from "./ProfileMenu.jsx";

export default function SettingProfile() {
    const user = JSON.parse(localStorage.getItem("user")); 
    return(
        <div className={style.setting}>
            <div className={style.userEmailDiv}>
                <span>{user.email}</span>
                <ProfileMenu  />
            </div>
        </div>
    );
}