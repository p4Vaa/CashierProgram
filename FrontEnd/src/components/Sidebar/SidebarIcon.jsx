
import style from "./Sidebar.module.css";
import { ShoppingCart , PanelLeft} from 'lucide-react';

export default function SidebarIcon({setIsOpen , isOpen}) {

    return (
        <div className={style.sidebarDIVicon}>
            
            {
                isOpen?
                <ShoppingCart  size={25}  className={style.icon}/> :
                <PanelLeft  width={20} className={`${style.sidebarIcon} `} onClick={()=>setIsOpen(prev=>!prev)} />
            }
            
            
            <h6 className={`${style.title} ${isOpen? style.textshow:style.textHide} `} >StoreManager</h6> 
            <PanelLeft  width={20} className={`${style.sidebarIcon} ${isOpen? style.textshow:style.textHide}`} onClick={()=>setIsOpen(prev=>!prev)} />
            <hr className={`${style.hr} ${isOpen? style.textshow:style.textHide}`} />
        </div>
    );
}

