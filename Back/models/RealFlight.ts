import { Airport } from "./Airport";

export class RealFlight{
    id?:number;
    departureAirport:Airport;
    arrivalAirport:Airport;
    price:number;
    capacity:number;

    constructor( departure:Airport, arrival:Airport, price:number, capacity:number){
        this.departureAirport=departure;
        this.arrivalAirport=arrival;
        this.price=price;
        this.capacity=capacity;
    }
}