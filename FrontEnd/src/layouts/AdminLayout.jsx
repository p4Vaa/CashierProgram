// Components
import style from '../assets/styles/Admin.module.css';
import Sidebar from "../components/Sidebar/Sidebar.jsx";

// 
import {Outlet} from "react-router-dom";



function AdminLayout() {

    return (
            <div className={style.AdminLayout}>
                <Sidebar />
                <Outlet />
            </div>
    );
}

export default AdminLayout;