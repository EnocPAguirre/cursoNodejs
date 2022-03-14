const {Router} = require('express');
const { getRequest, postRequest, putRequest } = require('../controllers/controladores');

const router = Router();

router.get('/', getRequest)
router.post('/', postRequest)
router.put('/:id', putRequest)

module.exports = router;