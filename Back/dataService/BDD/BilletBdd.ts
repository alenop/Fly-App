import {RowDataPacket,FieldPacket} from 'mysql2';
import { createConnection } from "./bdd";
export class BilletBdd {
    
    public async insertFlight (idCommand: string, name: string, status: string) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            `INSERT INTO Billet (id_commande,name,status) VALUES (?, ?, ?)`,
            [idCommand,name,status]
        );
        console.log('Billet inserted:', result);
        await connection.end();
    };

    public async getBillet (id:number) {
        const connection = await createConnection();
        const [rows]:[RowDataPacket[], FieldPacket[]] = await connection.execute(`SELECT * FROM Billet WHERE id = ?`,[id]);
        console.log('Billets:', rows);
        await connection.end();
        return rows[0];
    };

    public async getBillets () {
        const connection = await createConnection();
        const [rows] = await connection.execute(`SELECT * FROM Billet`);
        console.log('Billets:', rows);
        await connection.end();
        return rows;
    };
    
    public async deleteBillet (id: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(`DELETE FROM Billet WHERE id = ?`, [id]);
        console.log('Billet deleted:', result);
        await connection.end();
    };
    
}