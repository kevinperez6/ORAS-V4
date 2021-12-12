// const {passport} = require ('../lib/passports');
// const express = require('express');
// const {router} = express.Router();


// const authenticationInstructor =  async(req, res) =>{
//     const email = req.body.email;
//     const password = req.body.email;
//     let passwordHasas = await bcryptjs.hash(pass, 10);
//     if(user && pass){
//         connection.query('SELECT * FROM usuario WHERE email = ? ', [email], async (error, results)=>{
//             if(results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
//                 res.send("Usuario o password incorrecto")
//             }else{
//                 res.send("Ingreso exitoso")
//             }
//         })
//     }
// }

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
    // authenticationInstructor,
    authenticationAprendiz,
    authenticationAdmin
}
// module.exports = router; 