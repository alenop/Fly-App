import { User } from "../models/User"

import {BDD} from "./Interface/BDD";

const database:{[key:string]:any} = {

}

export class FakeBdd implements BDD {

    
    public static async createObject(obj:any,uuid:string,type:string){
        if(database[type]){
            database[type][uuid]=obj;
        }else {
            database[type]={};
            database[type][uuid]=obj;
        }
    }

    public static getAllObject(type:string){
        
        return database[type];
    }

    public static async createUser(user:User,uuid:string){
        database['user'][uuid]=user;
    }
    public static getAll(){
        return database;
    }
    public static getUserByUuid(uuid:string){
        return database['user'][uuid];
    }

    public static delete(uuid:string){

    }

}