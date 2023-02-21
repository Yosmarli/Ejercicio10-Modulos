import { suma, multiplica } from './controller.js'
import chalk from 'chalk';

const sum = suma ()

const multiplicacion = multiplica ()

console.log(multiplica(suma( 1, 2 ), suma( 4, 5 )))
console.log(chalk.green(multiplica(suma( 1, 2 ), suma( 4, 5 ))));