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
      console.error('Database connection error:', err);
    } else {
      console.log('Successfully connected to the database');
    }
  });

export default db;