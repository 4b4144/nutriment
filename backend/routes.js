const express = require('express');
const router = express.Router();
const SparqlClient = require('sparql-http-client')

const endpointUrl = 'http://localhost:3030/aliment/sparql';


router.get('/aliments', async (req, res) => {
    try {
    const query = 
    `
    SELECT ?value
    WHERE {
      ?s ?p ?value
    }
  `;
  const client = new SparqlClient({endpointUrl});
  const stream = await client.query.select(query);
  stream.on('data', row => {
    Object.entries(row).forEach(([key, value]) => {
      console.log(`${key}: ${value.value} (${value.termType})`)
    })
  });

  res.status(200).json({message : 'Succès'});
    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des donnée.' });
    }
});


module.exports = router;
