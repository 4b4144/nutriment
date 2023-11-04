import React from "react";
import {NavLink} from 'react-router-dom';

const NavBar = () =>{
    return(
        <>  
            <nav className="flex p-3 bg-orange bg-opacity-30 h-20  sticky top-0" >
               <NavLink to="/catalogue"><h1 className="text-5xl font-bold text-vertf font-titre">Nutriment</h1></NavLink> 
                <ul>
                    <li><NavLink to="/catalogue">Catalogue</NavLink> </li>
                    <li><NavLink to="/search">Rechercher un Aliment</NavLink> </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;