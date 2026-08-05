import style from '../../assets/styles/Admin.module.css';

export default function Head({pageTitle,btnContent,setAddModal,pageDes}) {
    return(
        <div  className={style.head}>
            <div>
                <h3 className={style.pageTitle}>{pageTitle}</h3>
                <span className="text-muted">{pageDes}</span>
            </div>
            <button className={style.Headbtn}  onClick={()=>setAddModal(true)}>{btnContent}</button>
        </div>
    );
}