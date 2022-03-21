import React from "react";
import './MenuItem.css'; //No es necesario crear un alias.

function MenuItem(props){
    console.log(props);
    return(
        <li className="menuItem">{props.name}</li>
    )
}

export default MenuItem;