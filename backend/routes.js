const express = require('express');
const router = express.Router();
const SparqlClient = require('sparql-http-client')

const endpointUrl = 'http://localhost:3030/aliment/sparql';


router.get('/', async (req, res) => {
    try {
        const query =
        `
        SELECT DISTINCT ?value
        WHERE {
        ?s ?p ?value
        }
    `;
        const client = new SparqlClient({ endpointUrl });
        const stream = await client.query.select(query);
        stream.on('data', row => {
            Object.entries(row).forEach(([key, value]) => {

            });
        });

        res.status(200).json({ message: 'Succès' });
    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des donnée.' });
    }
});


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const query = `
        SELECT DISTINCT ?predicate ?object
        WHERE {
          <http://127.0.0.1:3333/id=${id}> ?predicate ?object .
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


module.exports = router;
