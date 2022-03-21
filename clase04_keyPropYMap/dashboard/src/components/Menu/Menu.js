import React from "react";

function Menu(props){
    return(
       props.menuItem.map( (oneMenu, idx) => <li key={oneMenu + idx}>{oneMenu}</li>)
    )
}

export default Menu;