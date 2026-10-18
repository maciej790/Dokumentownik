
import mysql from 'mysql2';

const databaseHandler = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dokumentownik',
});

databaseHandler.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
    return;
  }

  console.log('Connected to the MySQL database.');
});

export default databaseHandler;
