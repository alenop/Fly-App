export class Flight{
    id?:number;
    depart:string;
    arrivee:string;
    prix:number;
    place:number;

    constructor( departure:string, arrival:string, price:number, capacity:number){
        this.depart=departure;
        this.arrivee=arrival;
        this.prix=price;
        this.place=capacity;
    }
}