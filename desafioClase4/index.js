let edad = parseInt(prompt("Ingresa tu edad"));

if (edad < 18) {
  alert("No puedes comprar dolares");
} else {
  function calculadora() {
    let nombre = prompt(
      "Hola! Bienvenido a la cueva de los dolares. Por favor ingresa tu nombre"
    );
    let cotizacionUsd = prompt(
      `${nombre} ingresa la cotizacion del dolar oficial banco nacion del dia de hoy`
    );
    let consulta = prompt("Cuantos USD quieres comprar???");
    let pesos = cotizacionUsd * consulta;
    alert(`${nombre} necesitaras ${pesos} pesos argentinos`);
  }
}
calculadora();
