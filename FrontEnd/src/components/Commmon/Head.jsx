import style from '../../assets/styles/Admin.module.css';

export default function Head({pageTitle,btnContent,setModalAdd}) {
    return(
        <div  className={style.head}>
            <h3 className={style.pageTitle}>{pageTitle}</h3>
            <button className={style.Headbtn}  onClick={()=>setModalAdd(prev=>!prev)}>{btnContent}</button>
        </div>
    );
}