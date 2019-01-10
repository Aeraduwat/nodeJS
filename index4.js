const http = require('http');

// http.createServer(function (request, res) {
//   res.writeHead(404, {'Content-type': 'text/plain'});
//   res.write('Hola desde NodeJS ');
//   res.end();
// }).listen(3000);

//
const handleServer = function (request, res) {
  res.writeHead(404, {'Content-type': 'text/plain'});
  res.write('Hola desde NodeJS ');
  res.end();
}

//
const server = http.createServer(handleServer);
//
server.listen(3000,function () {
  console.log('Server on port 3000');
});


//para poder subir el proyecto al servidor, se tiene que cargar
// el init = npm init
