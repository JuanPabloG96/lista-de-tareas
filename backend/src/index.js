require('dotenv').config()
require('./database')

const app = require('./app')

async function main() {
  await app.listen(app.get('port'));
  console.log('El servidor se está ejecutando en el puerto:', app.get('port'));
}

main()