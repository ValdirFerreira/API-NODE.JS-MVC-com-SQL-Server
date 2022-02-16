const express = require('express');
const api = express();
const routes = require('./router');

api.use(express.json());
api.use(routes);

api.listen(4200);