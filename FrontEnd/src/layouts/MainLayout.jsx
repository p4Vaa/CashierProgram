// Components
import style from '../assets/styles/Admin.module.css';
import Sidebar from "../components/Sidebar/Sidebar.jsx";

// 
import {Outlet} from "react-router-dom";



function MainLayout() {

    return (
        <div className={style.mainLayout}>
                <Sidebar />
                <Outlet />
        </div>
    );
}

export default MainLayout;