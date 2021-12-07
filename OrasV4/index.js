// const express = require('express')
const  express = require('express'); //Se importa la libreria express
const  router  = require('./routes/index.js');//Se importa la carpeta contenedora de las rutas, se tiene que agregar a app
const  db = require('./config/db.js'); 
const morgan = require('morgan');
// const  passport = require('passport');
// const  session = require('express-session');

// CORS 
const cors = require('cors');


//Initializations
const app = express();
import('./lib/passports.js');
//Solo se puedo tener ungestor de aplicaciones, en este caso app

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

//Definir puerto
const port = process.env.PORT || 4000// Si existe un puerto desocupado utilizalo, de no ser asi, utiliza el puerto 4000

//Habilitar PUG
app.set('view engine', 'pug');

//Middlewares
app.use( cors() );
app.use(express.json());
//Agregar body parser para leer los datos del formulario
app.use(morgan('dev'));
// app.use(passport.initialize());
// app.use(passport.session());
//Agregar boy parser para leer los datos del formulario
app.use(express.urlencoded({exyended: true}))

//Definimos la carpeta que contendra los arcivos estaticos, en este caso public
app.use(express.static('public'));


//Agregar routes
app.use('/', router);// Metodo app.use- soporta todos los metodos que se vallan agregando en routes

app.listen(port, () => {
    console.log(`El servidor esta funcionando`);
});


// Obtener el año actual
// app.use( (req, res, next) => {//req- la peticion que el usuario envia, res- la respuesta del servidor, next- ya termine sigue con el siguiente middleware
//     const year = new Date();
    
//     res.locals.actualYear = year.getFullYear();
//     // return next(); //Fuerza el middleware
//     next();
// })
