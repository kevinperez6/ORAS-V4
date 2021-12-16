// const express = require('express')
const  express = require('express'); //Se importa la libreria express
const  router  = require('./routes/index.js');//Se importa la carpeta contenedora de las rutas, se tiene que agregar a app
const PassportLocal = require('passport-local').Strategy
const {database} = require('./config/db');
const cors = require('cors');
// CORS 
// const cors = require('cors');


//Initializations
const app = express();
import('./lib/passports.js');

// Invocamos a dotenv
// const dotenv = require('dotenv');
// dotenv.config({path:'./config/db.js'})
//Solo se puedo tener ungestor de aplicaciones, en este caso app


//2- seteamos ulrencoded para caprturar los datos del formulario
app.use(express.urlencoded({exyended: true}))
app.use(express.json());

//3 - Invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});


//4 - Definimos la carpeta que contendra los arcivos estaticos, en este caso public
app.use(express.static('public'));
app.use(express.static(__dirname + 'public'));

//5 - Establecemos el motor de plantillas PUG
app.set('view engine', 'pug');

//6 - Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

//7 - var session
const session = require('express-session');
app.use(session({
    secret: 'Secreto',// Clave secreta
    resave: true,//
    saveUnitilized:true,//Si se inicializa una peticion sin guardar nada aun asi se va a guardar
}));


//8 - invocamos a la base de datos
const  db = require('./config/db.js'); 

//Definir puerto
const port = process.env.PORT || 4000// Si existe un puerto desocupado utilizalo, de no ser asi, utiliza el puerto 4000

//9 - Conectar la base de datos
db.connect((err)=>{
    if(!err){
        console.log("Conexion establecida");
    }else{
        console.log("No se establecio la conexion");
    }
}
);

//Agregar routes
app.use('/', router);// Metodo app.use- soporta todos los metodos que se vallan agregando en routes

//11 - Starting the server
app.listen(port, () => {
    console.log(`El servidor esta funcionando`);
});

//12 - iniciamos a cors
app.use(cors());



app.post('/registro',async(req, res) =>{
    const tipoDocumento = req.body.typ;
    const document = req.body.document;
    const fisrtName = req.body.firstName;
    const secondName = req.body.secondName;
    const surname = req.body.surname;
    const secondSurname = req.body.secondSurname;
    const email = req.body.email;
    const phone = req.body.phone;
    const foto = req.body.foto;
    const password = req.body.password;
    const campus = req.body.campus;
    const title = req.body.title;
    const file = req.body.file;
    const workday = req.body.workday;
    let passwordHaash = await bcryptjs.hash(password, 8);
    const rol = req.body.rol;
    db.query('INSERT INTO usuario SET ?', {
        Tipo_Doc:tipoDocumento,
        ID_Usuario:document,
        Primer_Nombre:fisrtName,
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


