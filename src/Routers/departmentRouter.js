const express = require('express');
const deparmentcontroller = require('../Controller/departmentController');
const router = express.Router();

router.get('/listdepartments', deparmentcontroller.listDepartments);

module.exports = router;