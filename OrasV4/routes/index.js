// const {router} = express.Router();
const { Router } = require('express');
// const express = require('express');//Se importa la libreria express
const {inicio,
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
  systemProfileSuper,
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
  consultaGeneral,
  consultaIndividual
} = require('../controllers/paginaController.js'); 

const { authenticationInstructor,authenticationAprendiz,authenticationAdmin} = require('../controllers/authentication.js')


const router = Router();

//Definir rutas y preticiones
router.get('/', inicio);

router.get('/ingresoInstructor',ingresoInstructor); 
router.post('/ingresoInstructor',authenticationInstructor); 
  
router.get('/ingresoAprendiz',ingresoAprendiz);
router.post('/ingresoAprendiz',authenticationAprendiz);

router.get('/ingresoAdmin',ingresoAdmin);
router.post('/ingresoAdmin',authenticationAdmin);

router.get('/recoverPasswordInstructor',recoverPasswordInstructor);

router.get('/recoverPasswordAprendiz',recoverPasswordAprendiz);

router.get('/recoverPasswordAdmin',recoverPasswordAdmin);

router.get('/changePasswordInstructor',changePasswordInstructor);

router.get('/changePasswordAprendiz',changePasswordAprendiz);

router.get('/changePasswordAdmin',changePasswordAdmin);

router.get('/systemProfileInst',systemProfileInst);

router.get('/systemProfileApre',systemProfileApre);

router.get('/systemProfileSuper',systemProfileSuper);

router.get('/homePageInstructor',homePageInstructor);

router.get('/homePageAprendiz',homePageAprendiz);

router.get('/homePageAdmin',homePageAdmin);

router.get('/activitiesAprendiz',activitiesAprendiz);

router.get('/activitiesInstructor',activitiesInstructor);

router.get('/registrationAprendiz',registrationAprendiz);

router.get('/registrationInstructor',registrationInstructor);

router.get('/definirAyudaInstructor', definirAyudaInstructor)

router.get('/definirAyudaAprendiz', definirAyudaAprendiz);

router.get('/gestionDeConsultas', gestionDeConsultas);

router.get('/consultaGeneral', consultaGeneral);

router.get('/consultaIndividual', consultaIndividual);



// router.get('/ingresoInstructor', (req, res) => {
//   res.render('./ingresos/ingresoInstructor');
//  });

// router.get('/ingresoInstructor', (req, res) => {
//   res.render('./ingresos/ingresoInstructor');
// });

// router.get('/ingresoInstructor', (req, res) => {
//   res.render('./ingresos/ingresoInstructor');
// });
  
  // router.get('/actividadesInstructor',)
  
  // router.get('/actividadesAprendiz',)
  
  
  
  //Exportamos las rutas al archivo principal app
  module.exports = router;
  
  //PETICIONES:
  //res.get- Cuando se visita una pagina
  //res.render- Se utiliza para mostrar una vista
