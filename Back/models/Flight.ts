export class Flight{
    id:number;
    name:string;
    departure:string;
    arrival:string;
    price:number;
    capacity:number;

    constructor(id:number, name:string, departure:string, arrival:string, price:number, capacity:number){
        this.id=id;
        this.name=name;
        this.departure=departure;
        this.arrival=arrival;
        this.price=price;
        this.capacity=capacity;
    }
}