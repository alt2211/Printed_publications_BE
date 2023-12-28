import mysql from 'mysql'

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookscandb',
  };

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
    if (err) {
      console.error('Ошибка подключения к базе данных:', err);
    } else {
      console.log('Подключено к базе данных');
    }
  });

export default db;

//Fka8u*aa