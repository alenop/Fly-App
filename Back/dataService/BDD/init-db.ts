import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const initDB = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });

    // Créer la base de données si elle n'existe pas
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    await connection.query(`USE ${process.env.DB_NAME}`);
    console.log(`Database "${process.env.DB_NAME}" is ready.`);

    // Créer la table "Aéroport"
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

    // Créer la table "Vol"
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

    // Créer la table "Client"
    await connection.query(`
        CREATE TABLE IF NOT EXISTS Client (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            mail VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        )
    `);
    console.log('Table "Client" is ready.');

    // Créer la table "Réservation"
    await connection.query(`
        CREATE TABLE IF NOT EXISTS Reservation (
            id INT AUTO_INCREMENT PRIMARY KEY,
            id_vol INT NOT NULL,
            id_client INT NOT NULL,
            date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_vol) REFERENCES Vol(id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (id_client) REFERENCES Client(id) ON DELETE CASCADE ON UPDATE CASCADE
        )
    `);
    console.log('Table "Reservation" is ready.');

    await connection.end();
    console.log("Database and all tables initialized successfully.");
};

initDB().catch((err) => {
    console.error("Error initializing database:", err);
});
