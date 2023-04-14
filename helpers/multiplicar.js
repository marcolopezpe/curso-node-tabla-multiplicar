import * as fs from 'node:fs';
import colors from 'colors';

/*const crearArchivo = (base = 5) => {

  return new Promise((resolve, reject) => {
    console.log('=====================')
    console.log(' Tabla del: ', base);
    console.log('=====================')

    let salida = '';

    for (let i = 1; i <= 10; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    resolve(`tabla-${base}.txt creado`);
  });
}*/

const crearArchivo = async (base = 5, listar, hasta) => {

  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
    }

    if (listar) {
      console.log('====================='.green)
      console.log(' Tabla del: '.green, base.toString().blue);
      console.log('====================='.green)
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
  } catch (error) {
    throw error;
  }
}

export {crearArchivo};