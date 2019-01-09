//se crea un objeto
const Math = {};

function add(x1,x2){
  return x1 + x2;
}
//FIN function
function substract(x1,x2){
  return x1 - x2;
}
//FIN function
function multiply(x1,x2){
  return x1 * x2;
}
//FIN function
function divide(x1,x2){
  if(x2 == 0)
  {
    console.log("No se puede dividir por 0 ")
  }else{
    return x1/x2;
  }
}
//FIN FUNCTION

//añadir a funciones al objeto
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//se carga el modulo con el objeto
module.exports = Math;
