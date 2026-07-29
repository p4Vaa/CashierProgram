import style from "../Sidebar.module.css";
import ProfileMenu from "./ProfileMenu.jsx";

export default function SettingProfile() {
    return(
        <div className={style.setting}>
            <div className={style.userEmailDiv}>
                <span>pavelhatam@gmail.com</span>
                <ProfileMenu  />
            </div>
        </div>
    );
}