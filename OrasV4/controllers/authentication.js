const passport = require('passport')

// passport.serializeUser((usr, done))


const authenticationInstructor = (req, res) =>{
    passport.authenticate('local.homepageInstructor',{
        succesRedirect: '/ingresoInstructor',
        failureRedirect: '/ingresoInstructor',
        failureFlas: true,
    }); 
    res.send('received')
};




const authenticationAprendiz = (req, res) =>{
    console.log(req.body);
    res.send('received');
}

const authenticationAdmin = (req, res) =>{
    passport.authenticate('local,signup',{
        succesRedirect:'./homePageAdmin',
        failureRedirect: '/ingresoAdmin,',
        failureFlash: 'true'
    })
    res.send('received');
};

module.exports = {
    authenticationInstructor,
    authenticationAprendiz,
    authenticationAdmin,
}




// else{
//     req.session.name = results[0].email
//     res.render('ingresoInstructor',{
//         alert:true,
//         alertTitle: 'Conexión exitosa',
//         alertMessage:'LOGIN CORRECTO',
//         alertIcon: 'success',
//         showConfirmButton: false,
//         timer: 1500,
//         ruta:'/'
//     })
// }