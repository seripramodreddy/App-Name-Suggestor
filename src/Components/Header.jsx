import React from 'react';
import './Header.css';

import Logo from '/images/undraw_Domain_names_re_0uun.svg';
const Header=(props)=>{
    return(
        <div className="head-container">
            <img src={Logo} alt="Name Suggestor" className={`head-img ${props.headerExpanded?'head-image-expanded':'head-image-contracted'}`}/>
            <h1 className="head-text">{props.headTitle}</h1>
        </div>
    )
}

export default Header;
