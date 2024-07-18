/* Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: porcentaje de
aprobados y cédula de alguno de los mejores estudiantes.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente:
Porcentaje de aprobados: 75%
Cédula de uno de los mejores estudiantes: 333 */

import CL_estudiante from "./CL_estudiantes.js";
import CL_salon from "./CL_salon.js";

let estud1 = new CL_estudiante(888,60);
let estud2 = new CL_estudiante(777,50);
let estud3 = new CL_estudiante(999,40);
let estud4 = new CL_estudiante(333,90);
let estud5 = new CL_estudiante(111,30);
let estud6 = new CL_estudiante(666,90);
let estud7 = new CL_estudiante(444,48);
let estud8 = new CL_estudiante(222,60);

let salon = new CL_salon();

salon.procesarestudiante(estud1);
salon.procesarestudiante(estud2);
salon.procesarestudiante(estud3);
salon.procesarestudiante(estud4);
salon.procesarestudiante(estud5);
salon.procesarestudiante(estud6);
salon.procesarestudiante(estud7);
salon.procesarestudiante(estud8);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> Porcentaje de aprobados: ${salon.procentajeaprobados()}% 
 <br> cedula de uno de los mejores estudiantes: ${salon.cedulamejorestudiante()}
`