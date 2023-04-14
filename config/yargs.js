import yargs from "yargs";
import {hideBin} from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
    },
    'l': {
      alias: 'listar',
      type: 'boolean',
      default: false,
      demandOption: true,
      describe: 'Muestra la tabla en consola'
    },
    'h': {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Es el número hasta donde se multiplicará la base'
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    return true;
  })
  .argv;

export {argv};