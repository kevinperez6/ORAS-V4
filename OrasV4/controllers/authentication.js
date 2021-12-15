const db = require("../config/db");

const authenticationInstructor =  async(req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    let passwordHaash = await bcryptjs.hash(password, 8);
    if(email && password){
        db.query('SELECT * FROM usuario WHERE Email = ?', [email], async (error,results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
                res.render('ingresoInstructor',{
                    alert:true,
                    alertTitle: 'Error',
                    alertMessage:'Email y/o constraseña incorrecta',
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta:'ingresoInstructor'
                });
        }else{
            req.session.name = results[0].email
            res.render('ingresoInstructor',{
                alert:true,
                alertTitle: 'Conexión exitosa',
                alertMessage:'LOGIN CORRECTO',
                alertIcon: 'success',
                showConfirmButton: false,
                timer: 1500,
                ruta:'/'
            })
        }
        })
    }else{
        res.send('Por favor ingrese un correo y su contraseña')
    }
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
    authenticationAdmin,
}
