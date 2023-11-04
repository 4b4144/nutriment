import React, {useState, useEffect} from 'react'

const Catalogue = () => {

    const[aliments, setAliments] = useState([]);

    useEffect(() => {
        console.log("Page catalogue")
    });

    const fetchAliments = () =>{
        // 
    }

    return(
        <>
            <div className="flex items-center justify-center w-full mt-4 mb-4 p-4 h-full border-2">
               <div className="w-4/5 h-screen  border-2">
                Catalogue
               </div>
            </div>
        </>
    );
}

export default Catalogue;