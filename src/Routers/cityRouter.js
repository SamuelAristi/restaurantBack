const express = require('express');
const citycontroller = require('../Controller/citysControllers');
const router = express.Router();

router.get('/listcities/:departmentId', citycontroller.listCities);

module.exports = router;