const route = require('express').Router();

route.get('/',(req,res)=>{
    res.json({Message:'Response from API...'});
});

module.exports = route;