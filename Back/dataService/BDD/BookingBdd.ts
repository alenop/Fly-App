// BookingBdd.ts
import { createConnection } from "./bdd";

export class BookingBdd {

    // Insert a new Booking into the "Booking" table
    public async insertBooking(id_vol: number, id_client: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            `INSERT INTO Reservation (id_vol, id_client) VALUES (?, ?)`,
            [id_vol, id_client]
        );
        console.log('Booking inserted:', result);
        await connection.end();
    }

    // Get all Bookings from the "Booking" table
    public async getBookings() {
        const connection = await createConnection();
        const [rows] = await connection.execute(`SELECT * FROM Reservation`);
        console.log('Bookings:', rows);
        await connection.end();
        return rows;
    }

    // Delete a Booking from the "Booking" table by id
    public async deleteBooking(id: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(`DELETE FROM Reservation WHERE id = ?`, [id]);
        console.log('Booking deleted:', result);
        await connection.end();
    }
}
