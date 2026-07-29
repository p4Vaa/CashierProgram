import style from '../../assets/styles/Admin.module.css';
import Head from "./Head.jsx";
import Body from "./bodyPage.jsx";


export default function CommonPage({pageTitle,btnContent,children,setModalAdd}) {
    
    return(
        <div  className={style.eachPage}>
            <Head pageTitle={pageTitle}  btnContent={btnContent} setModalAdd={setModalAdd}/>
            <Body children={children}/>
        </div>
    );
}