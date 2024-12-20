// AirportBdd.ts
import { createConnection } from "./bdd";
import { RowDataPacket,FieldPacket } from "mysql2";
export class AirportBdd {

    // Insert a new airport into the "Airport" table
    public async insertAirport(nom: string, ville: string, pays: string, code: string) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            `INSERT INTO Aeroport (nom, ville, pays, code) VALUES (?, ?, ?, ?)`,
            [nom, ville, pays, code]
        );
        console.log('Airport inserted:', result);
        await connection.end();
    }

    // Get all airports from the "Airport" table
    public async getAllAirports() {
        const connection = await createConnection();
        const [rows] = await connection.execute(`SELECT * FROM Aeroport`);
        console.log('Airports:', rows);
        await connection.end();
        return rows;
    }
    public async getAirportById(airport: number) {
        const connection = await createConnection();
        console.log(airport);
        const [rows]:[RowDataPacket[], FieldPacket[]] = await connection.execute(`SELECT * FROM Aeroport WHERE id = ?`, [airport]);
        console.log('Airports:', rows);
        await connection.end();
        return rows[0];
    }
    // Delete an airport from the "Airport" table by id
    public async deleteAirport(id: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(`DELETE FROM Aeroport WHERE id = ?`, [id]);
        console.log('Airport deleted:', result);
        await connection.end();
    }
}
