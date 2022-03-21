import React from "react";
import MenuItem from "../MenuItem/MenuItem";

function Navbar(){
    return(
        <nav className="main-nav">
            <ul className="menu">
                <MenuItem name="home"/>
                <MenuItem name="contact"/>
                <MenuItem name="about us"/>
                <MenuItem name="phone"/>
                <MenuItem name="notebook"/>
                <MenuItem name="desktop"/>
            </ul>
        </nav>
    )
}

export default Navbar;