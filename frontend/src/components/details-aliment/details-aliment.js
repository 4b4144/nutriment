import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import defaultAlimentImage from "../../utils/aliments.webp"

const DetailsAliment = () =>{
    const location = useLocation();
    const navigate = useNavigate();
    const aliment = location.state ? location.state.alim : null;

    return(
        <>
        <div className="flex items-center justify-center w-full mb-4  min-h-screen">
        <div className="w-4/5 h-full">
        {aliment ? (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4">
              <img
                className="rounded-lg h-96 w-96"
                src={aliment.alim_img || defaultAlimentImage}
                alt={aliment.alim_nom_fr}
              />
            </div>
            <div className="md:w-2/3 p-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300">
                {aliment.alim_nom_fr}
              </h2>
              <table className="table-auto w-full mt-4">
                <tbody>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Groupe:
                    </td>
                    <td>{aliment.alim_ssssg_nom_fr}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Calcium:
                    </td>
                    <td>{aliment.calcium || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Chlorure:
                    </td>
                    <td>{aliment.chlorure || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Cholestérol:
                    </td>
                    <td>{aliment.cholesterol || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Cuivre:
                    </td>
                    <td>{aliment.cuivre || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Eau:
                    </td>
                    <td>{aliment.eau || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Energie:
                    </td>
                    <td>{aliment.energie || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Fer:
                    </td>
                    <td>{aliment.fer || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Glucides:
                    </td>
                    <td>{aliment.glucides || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Glucose:
                    </td>
                    <td>{aliment.glucose || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Lipides:
                    </td>
                    <td>{aliment.lipides || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Protéines:
                    </td>
                    <td>{aliment.proteines || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Sucres:
                    </td>
                    <td>{aliment.sucres || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Vitamine B1:
                    </td>
                    <td>{aliment.vitamineB1 || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Vitamine B2:
                    </td>
                    <td>{aliment.vitamineB2 || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Vitamine B3:
                    </td>
                    <td>{aliment.vitamineB3 || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Vitamine C:
                    </td>
                    <td>{aliment.vitamineC || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Vitamine D:
                    </td>
                    <td>{aliment.vitamineD || "Non disponible"}</td>
                  </tr>
                  <tr>
                  <td className="font-medium text-gray-700 dark:text-gray-400">
                      Vitamine E:
                    </td>
                    <td>{aliment.vitamineE || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Vitamine K1:
                    </td>
                    <td>{aliment.vitamineK1 || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Vitamine K2:
                    </td>
                    <td>{aliment.vitamineK2 || "Non disponible"}</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700 dark:text-gray-400">
                      Zinc:
                    </td>
                    <td>{aliment.zinc || "Non disponible"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-700 dark:text-gray-400">
            Détails de l'aliment non disponibles.
          </p>
        )}
      </div>
    </div>
        </>
    )
}

export default DetailsAliment;