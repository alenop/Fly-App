export class Billet{
    id?:number;
    status:string;
    name:string;

    constructor( status:string, name:string){
        this.status=status;
        this.name=name;
    }
}