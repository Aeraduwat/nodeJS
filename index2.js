//decumentacion
// const os = require('os');
//
// console.log(os.platform());

const fs  = require('fs');

//crear nuevo archivo
//(nombre Archivo - contenido del archivo - callback)
//--> Codigo Asincrono
fs.writeFile('./texto.txt','linea uno', function (err){
    if(err){
      console.log(err);
    }
    console.log('Archivo Creado');
});

//Codigo bloqueante
console.log('ultima linea de codigo');

//
const users = query('SELECT * FROM users');

const users = query('SELECT * FROM users',function(err,users){
    if(err){
      console.log(err)
    }
    if (users){
      console.log(users);
    }
});
