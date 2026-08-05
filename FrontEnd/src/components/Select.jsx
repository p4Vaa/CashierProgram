import  style from '../assets/styles/Product.module.css';

export default  function Select({labelTxt,onChange,val,name,children}) {
    return (
       <div className={style.subBox}>
            <label htmlFor={labelTxt}>{labelTxt}</label>
            <select  id="lebelTxt" name={name} onChange={onChange}>
                {children}
            </select>
       </div> 
    );
}