const express = require('express');
const router = express.Router();
const SparqlClient = require('sparql-http-client')

const endpointUrl = 'http://localhost:3030/aliment/sparql';

// route pour : http:localhost:4000/aliments
router.get('/', async (req, res) => {
    try {
        const query =
            `
        SELECT DISTINCT (strafter(str(?id), "=") AS ?aliment_id) ?nom ?nomgrp ?image
        WHERE {
          ?id a ?type .
          ?id <http://127.0.0.1:3333/alim/alim_nom_fr> ?nom .
          ?id <http://127.0.0.1:3333/alim/alim_grp_nom_fr> ?nomgrp.
          OPTIONAL { ?id <http://127.0.0.1:3333/alim/alim_img> ?image }
          FILTER (!REGEX(?nomgrp, "^[0-9]"))
        }
    `;
        const client = new SparqlClient({ endpointUrl });
        const stream = await client.query.select(query);
        const result = [];

        stream.on('data', row => {
            dataObject = {};
            Object.entries(row).forEach(([key, value]) => {
                dataObject[key] = value.value;
            });
            result.push(dataObject);
        });

        stream.on('end', () => {
            res.status(200).json(result);
        });
    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des donnée.' });
    }
});

// route pour : http:localhost:4000/aliments/ un identifiant exemple : 1014
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const query = `
        SELECT ?predicate ?object
        WHERE {
          <http://127.0.0.1:3333/id=${id}> ?predicate ?object .
          FILTER (?predicate IN (
            <http://127.0.0.1:3333/alim/alim_nom_fr>,
            <http://127.0.0.1:3333/alim/alim_grp_nom_fr>,
            <http://127.0.0.1:3333/alim/alim_ssssg_nom_fr>,
            <http://127.0.0.1:3333/alim/alim_img>,
            <http://127.0.0.1:3333/alim/eau>,
            <http://127.0.0.1:3333/alim/vitamineE>,
            <http://127.0.0.1:3333/alim/vitamineK2>,
            <http://127.0.0.1:3333/alim/vitamineK1>,
            <http://127.0.0.1:3333/alim/chlorure>,
            <http://127.0.0.1:3333/alim/glucose>,
            <http://127.0.0.1:3333/alim/vitamineB2>,
            <http://127.0.0.1:3333/alim/lipides>,
            <http://127.0.0.1:3333/alim/calcium>,
            <http://127.0.0.1:3333/alim/vitamineC>,
            <http://127.0.0.1:3333/alim/fer>,
            <http://127.0.0.1:3333/alim/energie>,
            <http://127.0.0.1:3333/alim/sucres>,
            <http://127.0.0.1:3333/alim/vitamineB1>,
            <http://127.0.0.1:3333/alim/vitamineB3>,
            <http://127.0.0.1:3333/alim/vitamineD>,
            <http://127.0.0.1:3333/alim/glucides>,
            <http://127.0.0.1:3333/alim/proteines>,
            <http://127.0.0.1:3333/alim/cuivre>,
            <http://127.0.0.1:3333/alim/cholesterol>,
            <http://127.0.0.1:3333/alim/zinc>,
            <http://127.0.0.1:3333/alim/alim_img>
          ))
        }
      `;

        const result = {};

        const client = new SparqlClient({ endpointUrl });
        const stream = await client.query.select(query);

        stream.on('data', row => {
            const { predicate, object } = row;
            const shortKey = predicate.value.split('/').slice(-1)[0]; // Récupère la dernière partie de l'URL comme nom de clé
            result[shortKey] = object.value;
        });

        stream.on('end', () => {
            res.status(200).json(result);
        });

    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des donnée.' });
    }
});

 // route pour http:localhost:4000/aliments/search?recherche="...."
router.get('/search', async (req, res) => {
    try {
        const stringQuery = req.query.recherche;
        console.log(req.query);
        if (stringQuery) {
            const query =
                `
                SELECT DISTINCT (strafter(str(?id), "=") AS ?aliment_id) ?nom ?nomgrp ?image
                WHERE {
                  ?id a ?type .
                  ?id <http://127.0.0.1:3333/alim/alim_nom_fr> ?nom .
                  ?id <http://127.0.0.1:3333/alim/alim_grp_nom_fr> ?nomgrp.
                  OPTIONAL { ?id <http://127.0.0.1:3333/alim/alim_img> ?image }
                  FILTER (!REGEX(?nomgrp, "^[0-9]"))
                  FILTER (STRSTARTS(UCASE(?nom), UCASE("${stringQuery}")))
                }
        `;
            const client = new SparqlClient({ endpointUrl });
            const stream = await client.query.select(query);
            const result = [];

            stream.on('data', row => {
                dataObject = {};
                Object.entries(row).forEach(([key, value]) => {
                    dataObject[key] = value.value;
                });
                result.push(dataObject);
            });

            stream.on('end', () => {
                res.status(200).json(result);
            });
        }

    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des donnée.' });
    }
});

module.exports = router;
