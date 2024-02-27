const notasEstudiante = []; 
let notasTotal = 0;
let promedioNotas= 0;

const nombreEstudiante = prompt (`Bievenido a la calculadora de Promedio de Notas. 
Favor ingresar su nombre y apellido`);

function agregarNotas () {
    for(let i = 1; i <=5; i++){
    notasEstudiante.push (parseInt ((prompt(`Bievenido a la calculadora de Promedio de Notas. Por favor ingresar cada una de sus notas. Máximo 5 notas, estas van del 10 al 100`))))
    }
    }

    function suma () {
        for (let i = 0; i < notasEstudiante.length; i++) {
           notasTotal += notasEstudiante [i];
      }
};

function promedio () {
   return promedioNotas = (notasTotal/notasEstudiante.length) ;
}

function rangoNota (){  
   alert ("La nota final de " + nombreEstudiante + " es: " + Math.round(promedioNotas));     
if (promedioNotas >= 90) {
   alert ("¡Felicidades! Tu nota es igual o sobre 90, tu nota está en el rango de: A");
} else if (promedioNotas >= 80) {
   alert ("Tu nota es igual o sobre 80, bien hecho, tu nota está en el rango de: B");
} else if (promedioNotas >= 70) {
   alert ("Tu nota es igual o sobre 70, tu nota está en el rango de: C. ¡Sigue estudiando!");
} else if (promedioNotas >= 60) {
   alert ("Tu nota es igual o sobre 60, tu nota está en el rango de: D. ¡Puedes mejorar!");
} else {
   alert ("Tu nota es igual o sobre 50, tu nota está en el rango de: F. Sigue intentandolo.");
}
}


agregarNotas();
suma();
promedio ();
rangoNota ();

console.log (notasEstudiante);
console.log (notasTotal);
console.log (Math.round (promedioNotas));