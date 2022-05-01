const express = require('express');
const router = express.Router();

//Base de Datos
require('dotenv').config()


const { initializeApp, applicationDefault} =require('firebase-admin/app') ;
const {getFirestore}=require('firebase-admin/firestore')
initializeApp({
  credential: applicationDefault()
});

const db= getFirestore();


//Rutas
router.post('/newuser', (req, res) => {
  const newUser = {
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    contrasenna: req.body.contrasenna,
  };
  db.collection('users').add(newUser)
  res.send('recibido');


  
});

router.get('/newuser', (req, res) => {
  res.send('recibido');
});

module.exports = router;
