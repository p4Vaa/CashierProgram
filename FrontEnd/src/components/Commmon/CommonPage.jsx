import style from '../../assets/styles/Admin.module.css';
import Head from "./Head.jsx";
import Body from "./bodyPage.jsx";


export default function CommonPage({pageTitle,btnContent,children,setAddModal,pageDes}) {
    
    return(
        <div  className={style.eachPage}>
            <Head pageTitle={pageTitle} pageDes={pageDes} btnContent={btnContent} setAddModal={setAddModal} />
            <Body children={children}/>
        </div>
    );
}