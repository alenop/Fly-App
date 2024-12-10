export class Billet{
    id?:number;
    id_commande:string;
    status:string;
    name:string;

    constructor( idCommand:string, status:string, name:string){
        this.id_commande=idCommand;
        this.status=status;
        this.name=name;
    }
}