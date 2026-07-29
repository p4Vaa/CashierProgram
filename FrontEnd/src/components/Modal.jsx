import style from "../assets/styles/Admin.module.css";

export default  function Modal({children}){
    return(
        <div className={style.Modal}>
            {children}
        </div>
    );
}