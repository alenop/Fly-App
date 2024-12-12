// BookingBdd.ts
import { createConnection } from "./bdd";
import { RowDataPacket,FieldPacket } from "mysql2";
export class BookingBdd {
    public tableName:string="Commande"
    // Insert a new Booking into the "Booking" table
    public async insertBooking(id_vol: number, id_client: number,price:number,date:Date,id_billets:Number[]) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            `INSERT INTO ${this.tableName} (id_vol, id_client,total_price,id_billets,date) VALUES (?, ?,?,?,?)`,
            [id_vol, id_client,price,id_billets,date]
        );
        console.log('Booking inserted:', result);
        await connection.end();
    }

    public async getbook (flightId:number) {
        const connection = await createConnection();
        const [rows]:[RowDataPacket[], FieldPacket[]] = await connection.execute(`SELECT * FROM ${this.tableName} WHERE id_vol = ?`,[flightId]);
        console.log('books:', rows);
        await connection.end();
        return rows;
    };

    // Get all Bookings from the "Booking" table
    public async getBookings() {
        const connection = await createConnection();
        const [rows] = await connection.execute(`SELECT * FROM ${this.tableName}`);
        console.log('Bookings:', rows);
        await connection.end();
        return rows;
    }

    // Delete a Booking from the "Booking" table by id
    public async deleteBooking(id: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
        console.log('Booking deleted:', result);
        await connection.end();
    }
}
