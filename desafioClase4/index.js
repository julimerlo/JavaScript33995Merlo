let edad;

do {
  edad = parseInt(prompt("Ingresa tu edad"));
} while (isNaN(edad));

function calculadora() {
  let nombre = prompt(
    "Hola! Bienvenido a la cueva de los dolares. Por favor ingresa tu nombre"
  );
  let cotizacionUsd = prompt(
    `${nombre} ingresa la cotizacion del DOLAR BLUE del dia de hoy`
  );
  let consulta = prompt("Cuantos USD quieres comprar???");
  let pesos = cotizacionUsd * consulta;
  alert(`${nombre} necesitaras ${pesos} pesos argentinos`);
}

if (edad < 18) {
  alert("No puedes comprar dolares");
} else {
  calculadora();
}
