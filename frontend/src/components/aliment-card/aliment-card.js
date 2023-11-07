import {React, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"; 

import defaultAlimentImage from "../../utils/aliments.webp"

const AlimentCard = ({alimId, alimName, alimGroup, alimImage}) => {

    const navigate = useNavigate();

    const setAlimentData = async () => {
        try {
            const endPoint = `/aliments/${alimId}`;
            const res = await fetch(endPoint);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const alim = await res.json();
            navigateToDetailsPage(alim);
        } catch (error) {
            console.error(error);
        }
    }

    const navigateToDetailsPage = (alim) =>{
        if(alim !== null){
                navigate(`/catalogue/${alimId}` , { state: { alim } });
        }else{
            alert( 'Problème, veuillez réessayer !');
        }
    }

    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={alimImage || defaultAlimentImage} alt={alimName} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h4 className="mb-2 text-2xl font-bold tracking-tight text-orange dark:text-white">{alimName}</h4>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Type de produit : {alimGroup}</p>
                    <button onClick ={setAlimentData} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-mauve rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        En savoir plus ?
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default AlimentCard;