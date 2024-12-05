import { User } from "../model/User"

export class FakeBdd {

private database:{[key:string]:User} = {

}

    create(user:User,password:string){
        this.database[password] = user;
        console.log(this.database);
    }

    check(username:string,password:string){
        console.log(this.database);
        return this.database[password].mail === username || this.database[password].username;
    }

    get(password:string){
        return this.database[password];
    }

}