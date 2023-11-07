import {React, useState, useEffect} from "react";

const SearchAliment = () => {
    const[aliment, setAliment] = useState([]);

    useEffect(()=>{ 

    });

    const fetchAlimString = async(stringQuery) =>{
        try {
            const endPoint = `aliments/search?recherche=${stringQuery}`;
            const res = await fetch(endPoint);

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const alim = await res.json();

            setAliment(alim);
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center w-full mt-4 mb-4 p-4 h-full">
                <div className="w-4/5 h-full">
                    Rechercher un aliment

                    <div className="">

           
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchAliment;