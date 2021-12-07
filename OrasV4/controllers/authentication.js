// const {passport} = require ('../lib/passports');
// const express = require('express');
// const {router} = express.Router();


const authenticationInstructor = (req, res) =>{
    console.log(req.body);
    res.send('received');
}

const authenticationAprendiz = (req, res) =>{
    console.log(req.body);
    res.send('received');
}

const authenticationAdmin = (req, res) =>{
    // passport.authenticate('local,signup',{
        // succesRedirect:'./homePageAdmin',
        // failureRedirect: '/ingresoAdmin,',
        // failureFlash: 'true'
    // })
    res.send('received');
};

module.exports = {
    authenticationInstructor,
    authenticationAprendiz,
    authenticationAdmin
}
// module.exports = router; 