import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import AlimentCard from "../aliment-card/aliment-card";

const SearchAliment = () => {
    const [aliments, setAliments] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        
        if (searchText.length > 3) {
            fetchAlimString(searchText);
        } else {
           
            setAliments([]);
        }
    }, [searchText]);

    const fetchAlimString = async (stringQuery) => {
        try {
            const endPoint = `aliments/search?recherche=${stringQuery}`;
            const res = await fetch(endPoint);

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const alim = await res.json();
            setAliments(alim);
            setCurrentPage(0); 
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const paginatedAliments = aliments.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen mt-8 mb-16">
                <h1 className="text-2xl font-bold text-vertf font-titre mt-4">
                    Rechercher un aliment par son nom :
                </h1>
                <input
                    className="mt-8 w-96 h-10 p-4"
                    type="text"
                    placeholder="Rechercher un aliment exemple : Fromage"
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <div className="w-4/5 h-full p-8">
                    {aliments.length === 0 ? (
                        <h1>Aucun résultat...</h1>
                    ) : (
                        <div>
                            <h1 className="text-xl font-bold text-mauve mb-4">
                                Résultats pour : {searchText}
                            </h1>
                            <div className="grid grid-cols-3 gap-4">
                                {paginatedAliments.map((aliment, index) => (
                                    <div key={index}>
                                        <AlimentCard
                                            alimId={aliment.aliment_id}
                                            alimName={aliment.nom}
                                            alimGroup={aliment.nomgrp}
                                            alimImage={aliment.image}
                                            alimCal={aliment.cal}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {aliments.length > itemsPerPage && (
                <div className="flex flex-col items-center justify-center w-4/5 mt-24 mb-24">
                    <ReactPaginate
                        previousLabel={"< Précédent"}
                        nextLabel={"Suivant >"}
                        breakLabel={"..."}
                        pageCount={Math.ceil(aliments.length / itemsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="flex rounded py-2 px-4"
                        pageClassName="mx-4 font-bold"
                        activeClassName="bg-blue-500 text-orange font-bold"
                        previousClassName="mx-2 bg-vertf rounded px-2 py-1"
                        nextClassName="mx-2 bg-vertf rounded px-2 py-1"
                        breakClassName="mx-4"
                        pageLinkClassName="text-blue-500"
                        previousLinkClassName="text-white font-bold"
                        nextLinkClassName="text-white font-bold"
                    />
                </div>
            )}
            </div>

        </>
    );
};

export default SearchAliment;
