import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import { FakeBdd } from '../dataService/fakeBdd';
export class UserController {

    private db = new FakeBdd();

    async createUser(user:User){
        if(!await this.check(user.username,user.password)){
            return false;
        }
        const uuid = uuidv4();
        user.id = uuid;
        user.password = await this.hashPassword(user.password);
        this.db.createUser(user,uuid);
        return true;
    }

    getUser(){

    }

    deleteUser(){

    }

    async check(username:string,password:string){
        for (const i of Object.entries(this.db.getAll())){
            if (((i[1].username === username) || i[1].mail === username) && await this.verifyPassword(password,i[1].password)){
                return i[1];
            }
        }
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