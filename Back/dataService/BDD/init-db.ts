import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const initDB = async () => {
    try {
        // Establish a connection using credentials from .env
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || '',
            user: process.env.DB_USER || '',
            password: process.env.DB_PASSWORD || '',
            port: parseInt(process.env.DB_PORT || '', 10),
        });

        console.log("Connected to MySQL server!");

        // Ensure the database exists
        await connection.query(`DROP DATABASE \`${process.env.DB_NAME}\``);
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
        await connection.query(`USE \`${process.env.DB_NAME}\``);
        console.log(`Database "${process.env.DB_NAME}" is ready.`);

        // Create the "Aeroport" table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Aeroport (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nom VARCHAR(255) NOT NULL,
                ville VARCHAR(255) NOT NULL,
                pays VARCHAR(255) NOT NULL,
                code VARCHAR(10) UNIQUE NOT NULL
            )
        `);
        console.log('Table "Aeroport" is ready.');

        // Create the "Vol" table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Vol (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nom VARCHAR(255) NOT NULL,
                depart INT NOT NULL,
                arrivee INT NOT NULL,
                prix DECIMAL(10, 2) NOT NULL,
                place INT NOT NULL,
                FOREIGN KEY (depart) REFERENCES Aeroport(id) ON DELETE CASCADE ON UPDATE CASCADE,
                FOREIGN KEY (arrivee) REFERENCES Aeroport(id) ON DELETE CASCADE ON UPDATE CASCADE
            )
        `);
        console.log('Table "Vol" is ready.');

        // Create the "Client" table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Client (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                mail VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            )
        `);
        console.log('Table "Client" is ready.');

        // Create the "Commande" table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Commande (
                id INT AUTO_INCREMENT PRIMARY KEY,
                id_vol INT NOT NULL,
                id_client INT NOT NULL,
                total_price INT NOT NULL,
                id_billets JSON NOT NULL,
                date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (id_vol) REFERENCES Vol(id) ON DELETE CASCADE ON UPDATE CASCADE,
                FOREIGN KEY (id_client) REFERENCES Client(id) ON DELETE CASCADE ON UPDATE CASCADE
        )
        `);
        console.log('Table "Reservation" is ready.');

        // Create the "Billet" table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS Billet (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nom VARCHAR(255) NOT NULL,
                id_commande INT NOT NULL,
                status VARCHAR(50) NOT NULL,
                FOREIGN KEY (id_commande) REFERENCES Commande(id) ON DELETE CASCADE ON UPDATE CASCADE
            )
        `);

        

        // Close the connection
        await connection.end();
        console.log("Database and all tables initialized successfully.");
    } catch (err) {
        console.error("Error initializing database:", err);
        process.exit(1); // Exit the script with an error code
    }
};

// Execute the database initialization function
initDB();
