import style from "../Sidebar.module.css";
import {Link} from "react-router-dom";
export default function ProfileOption({icon:Icon ,text,path,onClick}) {
    return(
        <li className={style.profileMenuli} onClick={onClick}>
            <Link to={path} className={style.profileMenulink}>
                <Icon  className={style.iconMenu}/>
                <span className={`${style.linkData} ` }>
                    {text}
                </span>
            </Link>
        </li>
    );
}