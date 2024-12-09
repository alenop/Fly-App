// ClientBdd.ts
import { createConnection } from "./bdd";

export class ClientBdd {

    // Insert a new client into the "Client" table
    public async insertClient(username: string, mail: string, password: string) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            `INSERT INTO Client (username, mail, password) VALUES (?, ?, ?)`,
            [username, mail, password]
        );
        console.log('Client inserted:', result);
        await connection.end();
    }

    // Get all clients from the "Client" table
    public async getClients() {
        const connection = await createConnection();
        const [rows] = await connection.execute(`SELECT * FROM Client`);
        console.log('Clients:', rows);
        await connection.end();
        return rows;
    }

    // Delete a client from the "Client" table by id
    public async deleteClient(id: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(`DELETE FROM Client WHERE id = ?`, [id]);
        console.log('Client deleted:', result);
        await connection.end();
    }

    // Update client details in the "Client" table
    public async updateClient(id: number, username?: string, mail?: string, password?: string) {
        const connection = await createConnection();

        const updates: string[] = [];
        const params: any[] = [];
        
        // Build the update query dynamically based on the provided fields
        if (username) {
            updates.push("username = ?");
            params.push(username);
        }
        if (mail) {
            updates.push("mail = ?");
            params.push(mail);
        }
        if (password) {
            updates.push("password = ?");
            params.push(password);
        }

        if (updates.length === 0) {
            console.log("No fields to update");
            return;
        }

        // Append the client id at the end of the parameters
        params.push(id);

        // Execute the update query
        const query = `UPDATE Client SET ${updates.join(", ")} WHERE id = ?`;
        const [result] = await connection.execute(query, params);
        console.log('Client updated:', result);
        await connection.end();
    }
}
