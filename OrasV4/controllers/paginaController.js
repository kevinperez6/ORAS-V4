const db = require('../config/db');


const inicio = (req, res) => {//req- es lo que el usuario envia, res: es lo que la pagina responde.
    
    // db.query("SELECT * FROM usuario", function(error,datos){
    //     console.log(datos);
    // });
    
    
    res.render('./inicio');//Respuesta de la pagina  

};

const ingresoInstructor = (req, res) => {
    res.render('./ingresos/ingresoInstructor');
};


const ingresoAprendiz = (req, res) => {
    res.render('./ingresos/ingresoAprendiz');
};

const ingresoAdmin = (req, res) => {
    res.render('./ingresos/ingresoAdmin');
};

const recoverPasswordInstructor = (req, res) => {
    res.render('./recoverPassword/recoverPasswordInstructor');
};

const recoverPasswordAprendiz = (req, res) => {
    res.render('./recoverPassword/recoverPasswordAprendiz');
};

const recoverPasswordAdmin = (req, res) => {
    res.render('./recoverPassword/recoverPasswordAdmin');
};

const changePasswordInstructor = (req, res) => {
    res.render('./changePassword/changePasswordInstructor');
};

const changePasswordAprendiz = (req, res) => {
    res.render('./changePassword/changePasswordAprendiz');
};

const changePasswordAdmin = (req, res) => {
    res.render('./changePassword/changePasswordAdmin');
};

const systemProfileInst = (req, res) => {
    res.render('./perfilSistema/systemProfileInst');
};

const systemProfileApre = (req, res) => {
    res.render('./perfilSistema/systemProfileApre');
};

const systemProfileAdmin= (req, res) => {
    res.render('./perfilSistema/systemProfileAdmin');
};

// const actividadesInstructor = (req, res) => {
//     res.render('./actividades/actividadesInst');
//     };

// const actividadesAprendiz = (req, res) => {
//     res.render('./actividades/actividadesAprend');
//     };

const homePageInstructor = (req, res) => {
    res.render('./homepage/homePageInstructor');
};

const homePageAprendiz = (req, res) => {
    res.render('./homepage/homePageAprendiz');
};

const homePageAdmin = (req, res) => {
    res.render('./homepage/homePageAdmin');
};

const activitiesInstructor = (req, res) => {
    res.render('./activities/activitiesInstructor');
};

const activitiesAprendiz = (req, res) => {
    res.render('./activities/activitiesAprendiz');
};

const registrationInstructor = (req, res) => {
    res.render('./registroAsistencia/registrationInstructor');
};

const registrationAprendiz = (req, res) => {
    res.render('./registroAsistencia/registrationAprendiz');
};

const definirAyudaInstructor = (req, res) => {
    res.render('./definirAyuda/definirAyudaInstructor');
};

const definirAyudaAprendiz = (req, res) => {
    res.render('./definirAyuda/definirAyudaAprendiz');
};

const gestionDeConsultas = (req, res) => {
    res.render('./gestionDeConsultas/gestionDeConsultas');
}

const consultaIndividual = (req, res) => {
    res.render('./gestionDeConsultas/consultaIndividual');
}

const consultaGeneral = (req, res) => {
    res.render('./gestionDeConsultas/consultaGeneral');
}

const registro = (req, res)=>{
    res.render('./registration/userRegistration')
}

module.exports = {
    inicio,
    ingresoInstructor,
    ingresoAprendiz,
    ingresoAdmin,
    recoverPasswordInstructor,
    recoverPasswordAprendiz,
    recoverPasswordAdmin,
    changePasswordInstructor,
    changePasswordAprendiz,
    changePasswordAdmin,
    systemProfileInst,
    systemProfileApre,
    systemProfileAdmin,
    homePageInstructor,
    homePageAprendiz,
    homePageAdmin,
    activitiesInstructor,
    activitiesAprendiz,
    registrationInstructor,
    registrationAprendiz,
    definirAyudaInstructor,
    definirAyudaAprendiz,
    gestionDeConsultas,
    consultaIndividual,
    consultaGeneral,
    registro,
}


// const registro = async(req, res) =>{
//     const type = req.body.type;
//     // const document = req.body.document;
//     const fisrtName = req.body.fisrtName;
//     const secondName = req.body.secondName;
//     const surname = req.body.surname;
//     const secondSurname = req.body.secondSurname;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     const foto = req.body.foto;
//     // const campus = req.body.campus;
//     // const title = req.body.title;
//     // const file = req.body.file;
//     // const workday = req.body.workday;
//     let passwordHaash = await bcryptjs.hash(password, 8);
//     const rol = req.body.rol;
//     db.query('INSERT INTO usuario SET ?', {
//         Tipo_Doc:type,
//         // ID_Usuario:document,
//         Primer_Nombre:fisrtName,
//         Segundo_Nombre:secondName,
//         Primer_Apellido:surname,
//         Segundo_Apellido:secondSurname,
//         Email:email,
//         Telefono:phone,
//         Contraseña:passwordHaash,
//         Foto:foto,
//         Rol:rol,
//         // jornada: workday
//      }, async(error, results) =>{
//          if(error){
//              console,log(error);
//          }else{
//             res.send('Envio exitoso')
//          }
//      })
// }

// const registrationUser 
