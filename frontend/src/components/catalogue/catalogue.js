import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import AlimentCard from '../aliment-card/aliment-card';

const Catalogue = () => {

  const [aliments, setAliments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [groupFilter, setGroupFilter] = useState("");
  const [orderFilter, setOrderFilter] = useState("");

  const itemsPerPage = 9;
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

  const fetchAlimentsFiler = async () => {
    try {
      const endPoint = `/aliments?group=${groupFilter}&order=${orderFilter}`;
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
    <>

      <div className="flex flex-col items-center justify-center w-full mt-0 mb-4 p-24 min-h-screen">
        <h1 className="text-4xl  font-titre text-vertf font-bold mb-12">Retrouvez tous vos aliments préferés, et regardez leurs apports nutritionnels ! </h1>
        <div className="flex w-full">
          <div className="w-1/4 p-4">

            <div className="mb-4">
              <h2 className="text-2xl text-vertf font-bold font-titre mb-4">Filtrer par groupe : </h2>
              <div className='flex flex-col w-full'>
                <div className='flex items-center mb-4'>
                  <input
                    id='filtre 1'
                    type='radio'
                    value='produits laitiers et assimilés'
                    checked={groupFilter === 'produits laitiers et assimilés'}
                    onChange={() => setGroupFilter('produits laitiers et assimilés')}
                  />
                  <label
                    for='filtre 1'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Produits laitiers
                  </label>
                </div>

                <div className='flex items-center mb-4'>
                  <input
                    id='filtre 2'
                    type='radio'
                    value='viandes, œufs, poissons et assimilés'
                    checked={groupFilter === 'viandes, œufs, poissons et assimilés'}
                    onChange={() => setGroupFilter('viandes, œufs, poissons et assimilés')}
                  />
                  <label
                    for='filtre 2'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Viandes, œufs, poissons
                  </label>
                </div>

                <div className='flex items-center mb-4'>
                  <input
                    id='filtre 3'
                    type='radio'
                    value='produits céréaliers'
                    checked={groupFilter === 'produits céréaliers'}
                    onChange={() => setGroupFilter('produits céréaliers')}
                  />
                  <label
                    for='filtre 3'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Produits céréaliers
                  </label>
                </div>

                <div className='flex items-center mb-4'>
                  <input
                    id='filtre 4'
                    type='radio'
                    value='fruits, légumes, légumineuses et oléagineux'
                    checked={groupFilter === 'fruits, légumes, légumineuses et oléagineux'}
                    onChange={() =>
                      setGroupFilter('fruits, légumes, légumineuses et oléagineux')
                    }
                  />
                  <label
                    for='filtre 4'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Fruits, légumes, et oléagineux
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl text-vertf font-bold font-titre mb-4">Trier par apport calorique : </h2>
              <div className="flex flex-col w-full">

                <div className='flex items-center mb-4'>
                  <input
                    id="filtre 5 "
                    type="radio"
                    value="ASC"
                    checked={orderFilter === 'ASC'}
                    onChange={() => setOrderFilter('ASC')}
                  />
                   <label
                    for='filtre 5'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Ordre croissant
                  </label>                 
                </div>

                <div className='flex items-center mb-4'>
                  <input
                    id="filtre 6"
                    type="radio"
                    value="DESC"
                    checked={orderFilter === 'DESC'}
                    onChange={() => setOrderFilter('DESC')}
                  />
                   <label
                    for='filtre 5'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Ordre décroissant
                  </label>   
                </div>
              </div>
            </div>

            <div className="mb-4">
              <button onClick={fetchAlimentsFiler} className="w-full px-6 py-2 text-xl text-center text-white font-bold transition-colors duration-300 bg-vertf rounded-full  ease md:w-auto">Valider</button>
            </div>

          </div>
          <div className="w-3/4 p-14">
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
        </div>
        <div className="flex flex-col items-center justify-center w-4/5 mt-24">
          <ReactPaginate
            previousLabel={'< Précedent'}
            nextLabel={'Suivant >'}
            breakLabel={'...'}
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
      </div>
    </>
  );
}

export default Catalogue;