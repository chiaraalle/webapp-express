import mysql from 'mysql2'; 

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "root" : "NON DEFINITO");
console.log("DB_NAME:", process.env.DB_NAME);

connection.connect((err) => {
    if (err) {
      console.error("Errore di connessione al database:", err);
      return;
    }
    console.log("Connesso al database MySQL");
  });

export default connection;