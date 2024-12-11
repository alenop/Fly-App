export class Airport{
    id?:number;
    name:string;
    ville:string;
    pays:string;
    code:number;

    constructor( name:string,ville:string,pays:string,code:number){
        this.name=name;
        this.ville=ville;
        this.pays=pays;
        this.code=code;
    }
}