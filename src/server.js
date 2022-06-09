const express = require('express');
const api = express();
const routes = require('./router');
const cors = require('cors');

api.use(cors());
api.use(express.json());
api.use(routes);



api.listen(4200);
