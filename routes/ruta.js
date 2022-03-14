const {Router} = require('express');
const { getRequest, postRequest } = require('../controllers/controladores');

const router = Router();

router.get('/', getRequest)
router.post('/', postRequest)

module.exports = router;