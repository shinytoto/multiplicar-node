const colors = require("colors/safe");
const { argv } = require("./config/yargs");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.b, argv.limite);

    break;

  case "crear":
    crearArchivo(argv.base, argv.limite).then(
      (archivo) => console.log("Archivo creado:", colors.random(archivo)),
      (error) => {
        console.log(error);
      }
    );

    break;

  default:
    console.log("Comando no reconocido");
}

// let parametro = argv[2];
// let base = parametro.split("=")[1];
