import { User } from "../models/User"

import {BDD} from "./Interface/BDD";
export class FakeBdd implements BDD{

private database:{[key:string]:any} = {

}
    async createObject(obj:any,uuid:string,type:string){
        if(this.database.type){
            this.database.type[uuid]=obj;
        }else {
            this.database.type={};
            this.database.type[uuid]=obj;
        }
    }

    getAllObject(type:string){
        return this.database[type];
    }

    async createUser(user:User,uuid:string){
        this.database[uuid]=user;
    }
    getAll(){
        return this.database;
    }
    getByUuid(uuid:string){
        return this.database[uuid];
    }

    delete(uuid:string){

    }

}