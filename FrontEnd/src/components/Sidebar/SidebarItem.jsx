import style from './Sidebar.module.css'
import {Link} from "react-router-dom";

export default function SidebarItem({data,icon:Icon,path ,isOpen,activeOption,setActive}) {

    return (
        <li className={style.item}>
            <Link to={path} className={`${style.Link} ${activeOption==data?style.activeOption:style.SidebarOptionColor}`}
                    onClick={()=>setActive(prev=>data)}>
                <Icon  className={style.iconMenu}
                />
                <span className={`${style.linkData} ${isOpen? style.textshow:style.textHide}` }>
                    {data}
                </span>
            </Link>
        </li>
    );   
}

// ama laravel nya ama react agar hich te nagashte gwey myare