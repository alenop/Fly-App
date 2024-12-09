import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import {ClientBdd} from '../dataService/BDD/ClientBdd';
export class UserController {
    private bdd = new ClientBdd();

    async createUser(user:User){
        if(await this.check(user.username,user.password)){
            return false;
        }
        const uuid = uuidv4();
        user.id = uuid;
        user.password = await this.hashPassword(user.password);
        await this.bdd.insertClient(user);
        return true;
    }

    getUserById(id:number){
        return this.bdd.getClientbyId(id);
    }

    getUserByUsername(username:string){
        return this.bdd.getClientbyUsername(username);
    }

    deleteUser(){

    }

    async check(username:string,password:string){
        for (const i of await this.bdd.getClients()){
            if (i.username === username && await this.verifyPassword(password,i.password)){
                console.log("i:",i);
                return i;
            }
        }
        console.log("la ?");
        return false;
    }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10; // Adjust this for security/performance tradeoff
        return await bcrypt.hash(password, saltRounds);
      };
      
      // Compare a password with a hash
      async verifyPassword (password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
      };
}