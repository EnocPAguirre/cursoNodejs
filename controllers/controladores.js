const {response} = require('express');


const getRequest = (req, res = response)=>{
    res.json({
        msg: 'Respuesta'
    })
}

module.exports = {

 getRequest
}