import React, { useState, useEffect } from 'react'
import AlimentCard from '../aliment-card/aliment-card'

const Catalogue = (props) => {

    const [aliments, setAliments] = useState([]);

    useEffect(() => {
        fetchAliments();
    }, []);

    const fetchAliments = async () => {
        try {
            const endPoint = "/aliments";
            const res = await fetch(endPoint);

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const alims = await res.json();

            setAliments(alims);

            alims.forEach(element => {

                console.log(element);


            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center w-full mt-4 mb-4 p-4 h-full">
                <div className="w-4/5 h-full  ">
                    <div className="grid grid-cols-5 grid-rows-4 gap-4 ">
                        <div className="col-start-2" ><AlimentCard /></div>
                        <div className="col-start-3" ><AlimentCard /></div>
                        <div className="col-start-4" ><AlimentCard /></div>
                        <div className="col-start-2"><AlimentCard /></div>
                        <div className="col-start-3"><AlimentCard /></div>
                        <div className="col-start-4"><AlimentCard /></div>
                        <div className="col-start-2"><AlimentCard /></div>
                        <div className="col-start-3"><AlimentCard /></div>
                        <div className="col-start-4"><AlimentCard /></div>
                        <div className="col-start-2"><AlimentCard /></div>
                        <div className="col-start-3"><AlimentCard /></div>
                        <div className="col-start-4"><AlimentCard /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalogue;