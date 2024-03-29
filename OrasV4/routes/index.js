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
  consultaGeneral,
  consultaIndividual,
  registro,
} = require('../controllers/paginaController.js'); 

const { authenticationInstructor,authenticationAprendiz,authenticationAdmin} = require('../controllers/authentication.js')
const{
  // registrationUser
} = require ('../controllers/registration.js')


const router = Router();

//Definir rutas y preticiones
router.get('/', inicio);

router.get('/ingresoInstructor',ingresoInstructor); 
router.post('/ingresoInstructor', authenticationInstructor)

  
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

router.get('/systemProfileAdmin',systemProfileAdmin);

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

router.get('/registro', registro);
// router.post('/registro', registrationUser);


  
  
  //Exportamos las rutas al archivo principal app
  module.exports = router;
  
  //PETICIONES:
  //res.get- Cuando se visita una pagina
  //res.render- Se utiliza para mostrar una vista
