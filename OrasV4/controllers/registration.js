

// const registrationUser = (req, res) => {
//     res.render('./activities/activitiesAprendiz');
//     console.log(req.body);
//     res.send(body);
// };


const registrationUser = async(req, res) =>{
    const type = req.body.type;
    // const document = req.body.document;
    const fisrtName = req.body.fisrtName;
    const secondName = req.body.secondName;
    const surname = req.body.surname;
    const secondSurname = req.body.secondSurname;
    const email = req.body.email;
    const phone = req.body.phone;
    // const campus = req.body.campus;
    // const title = req.body.title;
    // const file = req.body.file;
    // const workday = req.body.workday;
    let passwordHaash = await bcryptjs.hash(pass, 8);
    const rol = req.body.rol;
    connection.query('INSERT INTO usuario SET ?', {
        Tipo_Doc:type,
        // ID_Usuario:document,
        Primer_Nombre:fisrtName,
        Segundo_Nombre:secondName,
        Primer_Apellido:surname,
        Segundo_Apellido:secondSurname,
        Email:email,
        telefono:phone,
        password:passwordHaash,
        Rol:rol,
        // jornada: workday
     }, async(error, results) =>{
         if(error){
             console,log(error);
         }else{
            res.send('Envio exitoso')
         }
     })
}


module.exports = {
    registrationUser
}


