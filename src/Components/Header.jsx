import React from 'react';
import './Header.css';


const Header=(props)=>{
    return(
        <div className="head-container">
 
            <h1 className="head-text">{props.headTitle}</h1>
        </div>
    )
}

export default Header;
