import React from "react";

const Footer = () =>{
    return(
        <>  
            <div className="p-5 w-full h-full bg-vertf text-white">
                <h1 className="font-bold text-white text-center text-xl">Nutriment</h1>
                <p className="text-center text-lg mt-3">Copyright © {new Date().getFullYear()} Abdelkader ARKOUN Louise DONG</p>
            </div>
        </>
    );
}

export default Footer;

