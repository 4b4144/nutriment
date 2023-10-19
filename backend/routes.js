const express = require('express');
const router = express.Router();
const { SparqlClient } = require('sparql-http-client');

router.get('/', async (req, res) => {
    try {
        const alimentData = await fetchAliment();
        res.status(200).json(alimentData);
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
    }
});

const fetchAliment = async () => {
    const client = new SparqlClient({ endpointUrl: 'http://localhost:3030/dataset/aliment/query' });
    const query = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    SELECT * WHERE {
      ?sub ?pred ?obj .
    } LIMIT 10
  `;

    return client.query.select(query).execute()
        .then(response => {
            const results = response.results.bindings;
            return { results };
        })
        .catch(error => {
            console.error('Erreur lors de l\'exécution de la requête :', error);
            throw error;
        });
}

module.exports = router;
