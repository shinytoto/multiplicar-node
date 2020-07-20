const fs = require("fs");
const colors = require("colors");

module.exports.crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(
        `Error: "${base}" no es un número, porfavor, digite un valor válido.`
      );
      return;
    }

    let data = "";

    for (let i = 1; i < limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}-al-${limite}.txt`);
    });
  });
};

module.exports.listarTabla = (base, limite = 10) => {
  console.log('//==================================//'.blue);
  console.log(`//============Tabla de ${base}============//`.red);
  console.log('//==================================//'.blue);
  for (let i = 1; i < limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};
