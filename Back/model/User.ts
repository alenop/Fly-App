export class User {
    username:string;
    mail:string;
    id?:string;


    constructor(username:string,mail:string){
        this.username=username;
        this.mail=mail;
    }
}