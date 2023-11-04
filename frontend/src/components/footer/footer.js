import React from "react";
import {NavLink} from 'react-router-dom';

const Footer = () =>{
    return(
        <>  
            <div className="p-5 w-full  mb-auto h-full bg-vertf text-white ">
                <NavLink to="/catalogue" ><h1 className="font-bold text-white text-center text-xl">Nutriment</h1></NavLink>
                <p className="text-center text-lg mt-3">Copyright © {new Date().getFullYear()} Abdelkader ARKOUN Louise DONG</p>
            </div>
        </>
    );
}

export default Footer;

