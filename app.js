import {crearArchivo} from './helpers/multiplicar.js';
import {argv} from './config/yargs.js';
import colors from 'colors';

console.clear();

/*const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');*/


//console.log(process.argv);
//console.log(argv);

//const base = 7;

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err));
