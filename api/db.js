import mysql from 'mysql'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Link@1master',
  database: 'crud2'
})
