import { Children } from 'react';
import style from '../../assets/styles/Admin.module.css';

export default function bodyPage({children}) {
    return(
        <div  className={style.body}>
            <div className={style.tableCard}>
                <table className={style.table}>
                    {children}
                </table>
            </div>
        </div>
    );
}