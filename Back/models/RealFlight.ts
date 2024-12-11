import { Airport } from "./Airport";

export class RealFlight{
    id?:number;
    departureAirport:Airport;
    arrivalAirport:Airport;
    prix:number;
    capacity:number;
    seatavailable?:number;

    constructor( departure:Airport, arrival:Airport, price:number, capacity:number){
        this.departureAirport=departure;
        this.arrivalAirport=arrival;
        this.prix=price;
        this.capacity=capacity;
    }
}