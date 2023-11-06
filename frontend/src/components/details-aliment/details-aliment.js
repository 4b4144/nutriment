import React from "react";
import { useLocation } from "react-router-dom";
import defaultAlimentImage from "../../utils/aliments.webp"

const DetailsAliment = () =>{
    const location = useLocation();
    const aliment = location.state ? location.state.alim : null;

    return(
        <>
            <div className="flex items-center justify-center w-full mt-4 mb-4 p-4 h-full">
               <div className="w-4/5 h-full ">
               NOM : {aliment ? aliment.alim_nom_fr : "Nom de l'aliment non disponible"} <br/>
               Image : <img className="rounded-t-lg h-96 w-96" src={ aliment ? (aliment.alim_img ? aliment.alim_img : defaultAlimentImage) : "Nom de l'aliment non disponible"} alt="" /> <br/>
               Groupe :  {aliment ? aliment.alim_ssssg_nom_fr : "Nom de l'aliment non disponible"} <br/>
               Calcium : {aliment ? aliment.calcium : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.chlorure : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.cholesterol : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.cuivre : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.eau : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.energie : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.fer : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.glucides : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.glucose : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.lipides : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.proteines : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.sucres : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.vitamineB1 : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.vitamineB2 : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.vitamineB3 : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.vitamineC : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.vitamineD : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.vitamineE : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.vitamineK1 : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.vitamineK2 : "Nom de l'aliment non disponible"} <br/>
                {aliment ? aliment.zinc : "Nom de l'aliment non disponible"} <br/>
               </div>
            </div>
        </>
    )
}

export default DetailsAliment;