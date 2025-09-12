import './Btn.css'
import { useState } from 'react';

const Btn = ({varitaion, onClick, children}) => {

    return(
        <button className={`btn ${varitaion}`} onClick={onClick}>{children}</button>
    )
}
export default Btn;