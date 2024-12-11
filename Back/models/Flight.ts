export class Flight{
    id?:number;
    depart:string;
    arrivee:string;
    price:number;
    capacity:number;

    constructor( departure:string, arrival:string, price:number, capacity:number){
        this.depart=departure;
        this.arrivee=arrival;
        this.price=price;
        this.capacity=capacity;
    }
}