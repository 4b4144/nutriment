import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import AlimentCard from '../aliment-card/aliment-card';

const Catalogue = () => {

  const [aliments, setAliments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  useEffect(() => {
    fetchAliments();
  }, []);


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
            
        } catch (error) {
            console.error(error);
        }
    }

    const paginatedAliments = aliments.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );
    const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
    };

    return (
      <div className="flex flex-col items-center justify-center w-full mt-4 mb-4 p-28 h-full">
        <div className="w-4/5 h-full">
          <div className="grid grid-cols-3 gap-4">
            {paginatedAliments.map((aliment, index) => (
              <div key={index}>
                <AlimentCard
                  alimId={aliment.aliment_id}
                  alimName={aliment.nom}
                  alimGroup={aliment.nomgrp}
                  alimImage={aliment.image}
                />
              </div>
            ))}
        </div>
      </div>
        <div className="flex flex-col items-center justify-center w-4/5 mt-24">
          <ReactPaginate
            previousLabel={'< Précedent'}
            nextLabel={'Suivant >'}
            breakLabel={'...'}
            pageCount={Math.ceil(aliments.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
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
      </div>
    );
}

export default Catalogue;