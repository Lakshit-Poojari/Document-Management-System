import mysql from 'mysql2/promise';

// Create a connection pool to the MySQL database
export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:"",
    database: "document_management"
})

export default db;