import React, {useState, useEffect} from 'react'

const Catalogue = () => {

    const[aliments, setAliments] = useState([]);

    useEffect(() => {
        console.log("Page catalogue")
    });

    const fetchAliment = () =>{

    }

    return(
        <>
            <div className="border-4">
                <h1>CATALOGUE D'ALIMENT</h1>
            </div>
        </>
    );
}

export default Catalogue;