const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', require('./routes'))

app.listen(3000, () => {
  console.log("localhost:3000");
})

// doyidet297@fleeebay.com
// doyidet297
// host: mysql-46184-0.cloudclusters.net
// port: 19896
// ip: 181.215.242.81
// user: admin

// Crear archivos
// ./node_modules/sequelize-cli/lib/sequelize migration:create --name CreateTableProducts
// Ejecutar migración
// ./node_modules/sequelize-cli/lib/sequelize db:migrate