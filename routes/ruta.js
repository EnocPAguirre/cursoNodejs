const {Router} = require('express');
const { getRequest } = require('../controllers/controladores');

const router = Router();

router.get('/', getRequest)

module.exports = router;