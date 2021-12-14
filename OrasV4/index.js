// const express = require('express')
const  express = require('express'); //Se importa la libreria express
const  router  = require('./routes/index.js');//Se importa la carpeta contenedora de las rutas, se tiene que agregar a app
const  db = require('./config/db.js'); 
const morgan = require('morgan');

// CORS 
// const cors = require('cors');


//Initializations
const app = express();
import('./lib/passports.js');

// Invocamos a dotenv
// const dotenv = require('dotenv');
// dotenv.config({path:'./config/db.js'})
//Solo se puedo tener ungestor de aplicaciones, en este caso app


//Definir puerto
const port = process.env.PORT || 4000// Si existe un puerto desocupado utilizalo, de no ser asi, utiliza el puerto 4000

//Conectar la base de datos
db.connect(
    (err)=>{
        if(!err){
            console.log("Conexion establecida");
        }else{
            console.log("No se establecio la conexion");
        }
    }
);



//Definimos la carpeta que contendra los arcivos estaticos, en este caso public
app.use(express.static('public'));
app.use(express.static(__dirname + 'public'));

//Habilitar el motor de plantillas PUG
app.set('view engine', 'pug');

// - Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

// - Var. de session
const session = require('express-session');
app.use(session({
    secret: 'secret',// Clave secreta
    resave: true,
    saveUnitilized:true
}));


//Middlewares
// app.use( cors() );
app.use(express.json());
//Agregar body parser para leer los datos del formulario
app.use(morgan('dev'));
//Agregar boy parser para leer los datos del formulario
app.use(express.urlencoded({exyended: true}))


//Agregar routes
app.use('/', router);// Metodo app.use- soporta todos los metodos que se vallan agregando en routes

//Starting the server
app.listen(port, () => {
    console.log(`El servidor esta funcionando`);
});



router.post('/auth',async(req, res) =>{
    const Email = req.body.Email;
    const Contraseña = req.body.Contraseña;
    let passwordHaash = await bcryptjs.hash(Contraseña, 10);
    if(Email && Contraseña){
        db.query('SELECT * FROM usuario WHERE Email = ? ', [Email], async (error, results)=>{
          if(results.length == 0 || !(await bcryptjs.compare(Contraseña, results[0].Contraseña))){
                res.send("Usuario o password incorrecto")
        }else{
         res.send("Ingreso exitoso")
      }
    })
    }
  })    



router.post('/homePageAdmin',async(req, res) =>{
    // const documentos = req.body.documentos;
    // const document = req.body.document;
    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const surname = req.body.surname;
    const secondSurname = req.body.secondSurname;
    const email = req.body.email;
    const phone = req.body.phone;
    // const foto = req.body.foto;
    // const campus = req.body.campus;
    // const title = req.body.title;
    // const file = req.body.file;
    // const workday = req.body.workday;
    const password = req.body.password
    let passwordHaash = await bcryptjs.hash(password, 8);
    // const rol = req.body.rol;
    db.query('INSERT INTO usuario SET ?', {
        // Tipo_Doc:documentos,
        // ID_Usuario:document,
        Primer_Nombre:firstName,
        Segundo_Nombre:secondName,
        Primer_Apellido:surname,
        Segundo_Apellido:secondSurname,
        Email:email,
        Telefono:phone,
        Contraseña:passwordHaash,
        // Foto:foto,
        // Rol:rol,
        // jornada: workday
     }, async(error, results) =>{
         if(error){
             console.log(error);
         }else{
            res.send('Envio exitoso',{
                alert:true
            })
         }
     })
})