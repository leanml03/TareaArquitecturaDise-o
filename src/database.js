
const { getDatabase, ref } = require('firebase/database');
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
  apiKey: 'AIzaSyCt_o7yaHJeMCL--kXp7oUGPHBWAVUNq3M',
  authDomain: 'tareaarquicapas.firebaseapp.com',
  databaseURL: 'https://tareaarquicapas-default-rtdb.firebaseio.com',
  projectId: 'tareaarquicapas',
  storageBucket: 'tareaarquicapas.appspot.com',
  messagingSenderId: '69211333475',
  appId: '1:69211333475:web:4b2b35277eac9f8adba956',
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
module.exports = db;
