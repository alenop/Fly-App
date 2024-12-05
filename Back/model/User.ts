export class User {
    name:string;
    lastName:string;
    mail:string;
    id?:string;


    constructor(name:string,lastName:string,mail:string){
        this.name=name;
        this.lastName=lastName;
        this.mail=mail;
    }
}