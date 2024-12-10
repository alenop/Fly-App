// BookingBdd.ts
import { createConnection } from "./bdd";

export class BookingBdd {
    public tableName:string="Commande"
    // Insert a new Booking into the "Booking" table
    public async insertBooking(id_vol: number, id_client: number,price:number,date:Date,billets:[]) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            `INSERT INTO ${this.tableName} (id_vol, id_client,total_price,id_billets,date) VALUES (?, ?,?,?,?)`,
            [id_vol, id_client,price,billets,date]
        );
        console.log('Booking inserted:', result);
        await connection.end();
    }

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
