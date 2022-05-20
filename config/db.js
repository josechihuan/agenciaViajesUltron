const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});


global.db = pool; // de manera global se vapoder acceder a una variable db asi recuperamois  el pool
 // requerir este fichero lo antes posible dentro de nuestra aplicacion ir a www dentro de bon