const {response} = require('express');


const getRequest = (req, res = response)=>{
    const query = req.query;
    res.json({
        msg: 'Respuesta',
        query
    })
}

const postRequest = (req, res = response) => {
    const body = req.body;
    res.json({
        body
    })
}

const putRequest = (req, res = response) => {
    const id = req.params;
    res.json({
        id
    })
}

module.exports = {
 getRequest,
 postRequest,
 putRequest
}