import { Flight } from "../../models/Flight";
import {RowDataPacket,FieldPacket} from 'mysql2';
import { createConnection } from "./bdd";
export class FlightBdd {
    
    public async insertFlight (nom: string, depart: number, arrivee: number, prix: number, place: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            `INSERT INTO Vol (nom, depart, arrivee, prix, place) VALUES (?, ?, ?, ?, ?)`,
            [nom, depart, arrivee, prix, place]
        );
        console.log('Vol inserted:', result);
        await connection.end();
    };

    public async getFlight (id:number) {
        const connection = await createConnection();
        const [rows]:[RowDataPacket[], FieldPacket[]] = await connection.execute(`SELECT * FROM Vol WHERE id = ?`,[id]);
        console.log('Vols:', rows);
        await connection.end();
        return rows[0];
    };

    public async getFlights () {
        const connection = await createConnection();
        const [rows] = await connection.execute(`SELECT * FROM Vol`);
        console.log('Vols:', rows);
        await connection.end();
        return rows;
    };
    
    public async deleteFlight (id: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(`DELETE FROM Vol WHERE id = ?`, [id]);
        console.log('Vol deleted:', result);
        await connection.end();
    };
    
}