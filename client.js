const elastic = require('elasticsearch');
const elasticClient = new elastic.Client({
    host: 'localhost:9200',
    log: 'trace'
});

module.exports = elasticClient;