const YAML = require('yamljs');
const path = require('path');

const swaggerPath = path.join(__dirname, 'openapi.yaml');
const swaggerDocument = YAML.load(swaggerPath);

module.exports = swaggerDocument;
