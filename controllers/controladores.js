const {response} = require('express');


const getRequest = (req, res = response)=>{
    res.json({
        msg: 'Respuesta'
    })
}

const postRequest = (req, res = response) => {
    const body = req.body;
    res.json({
        body
    })
}

module.exports = {
 getRequest,
 postRequest
}