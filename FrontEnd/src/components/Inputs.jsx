import  style from '../assets/styles/Product.module.css';

export default  function Inputs({type,labelTxt,onChange,val,name,placeHolder, children,id}) {
    return (
       <div className={style.subBox}>
            <label htmlFor={labelTxt}>{labelTxt}</label>
        <input type={type} id={id} onChange={onChange} name={name} value={val} placeholder={placeHolder} />
        <span className={style.err}>{children}</span>
       </div> 
    );
}