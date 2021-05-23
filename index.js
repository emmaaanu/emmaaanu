const pelis = require("./pelis.js");

function parsearARGV(argumentos) {
  const resultado = {};
  argumentos.forEach(function (item, indice) {
    if (item.startsWith("--")) {
      const textoSinLineas = item.slice(2);
      resultado[textoSinLineas] = argumentos[indice + 1];
    }
  });
  return resultado;
}

function main() {
  const argumentos = process.argv.slice(2);
  const comandos = parsearARGV(argumentos);
  const busqueda = pelis.searchByCriteria(comandos);
  console.log(busqueda);
}

main();
