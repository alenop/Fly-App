export class Flight{
    id?:number;
    departure:string;
    arrival:string;
    price:number;
    capacity:number;

    constructor( departure:string, arrival:string, price:number, capacity:number){
        this.departure=departure;
        this.arrival=arrival;
        this.price=price;
        this.capacity=capacity;
    }
}