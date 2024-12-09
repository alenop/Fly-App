// ClientBdd.ts
import { createConnection } from "./bdd";
import { User } from "../../models/User";
export class ClientBdd {

    // Insert a new client into the "Client" table
    public async insertClient(user:User) {
        const connection = await createConnection();
        const [result] = await connection.execute(
            `INSERT INTO Client (username, mail, password) VALUES (?, ?, ?)`,
            [user.username, user.mail, user.password]
        );
        console.log('Client inserted:', result);
        await connection.end();
    }

    // Get all clients from the "Client" table
    public async getClients() {
        const connection = await createConnection();
        const result = await connection.execute(`SELECT * FROM Client`);
        console.log('Clients:', result);
        await connection.end();
        return result[0] as User[];
    }

    public async getClientbyId(id:number) {
        const connection = await createConnection();
        const result = await connection.execute(`SELECT * FROM Client WHERE id = ?`, [id]);
        console.log('Clients:', result);
        const users = result[0] as User[];
        await connection.end();
        return users[0] as User;
    }
    public async getClientbyUsername(username:string) {
        const connection = await createConnection();
        const result = await connection.execute(`SELECT * FROM Client WHERE id = ?`, [username]);
        console.log('Clients:', result);
        const users = result[0] as User[];
        await connection.end();
        return users[0] as User;
    }

    // Delete a client from the "Client" table by id
    public async deleteClient(id: number) {
        const connection = await createConnection();
        const [result] = await connection.execute(`DELETE FROM Client WHERE id = ?`, [id]);
        console.log('Client deleted:', result);
        await connection.end();
    }

    // Update client details in the "Client" table
    public async updateClient(user: User) {
        const connection = await createConnection();

        const updates: string[] = [];
        const params: any[] = [];

        // Dynamically add properties to be updated based on the user object
        if (user.username) {
            updates.push("username = ?");
            params.push(user.username);
        }
        if (user.mail) {
            updates.push("mail = ?");
            params.push(user.mail);
        }
        if (user.password) {
            updates.push("password = ?");
            params.push(user.password);
        }

        if (updates.length === 0) {
            console.log("No fields to update");
            return;
        }

        // Append the user id at the end of the parameters
        params.push(user.id);

        // Execute the update query
        const query = `UPDATE Client SET ${updates.join(", ")} WHERE id = ?`;
        const [result] = await connection.execute(query, params);
        console.log('Client updated:', result);
        await connection.end();
    }
}
