import { User } from "../model/User"
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
export class FakeBdd {

private database:{[key:string]:User} = {

}

    async create(user:User){
        const uuid = uuidv4();
        user.id = uuid;
        user.password = await this.hashPassword(user.password);
        this.database[uuid] = user;
        console.log(this.database);
    }

    async check(username:string,password:string){
        console.log(this.database);
        for (const i of Object.entries(this.database)){
            if (i[1].username === username && await this.verifyPassword(password,i[1].password)){
                return i[1];
            }
        }
        return false;
    }

    get(uuid:string){
        return this.database[uuid];
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