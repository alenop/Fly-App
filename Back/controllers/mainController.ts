import {UserController} from './userController';
import {BookController} from './bookController';
import { AirportController } from './airportController';
import { Book } from '../models/Book';
import {FlightBdd} from '../dataService/BDD/FlightBdd';
import {BilletBdd} from '../dataService/BDD/BilletBdd';
import { Flight } from '../models/Flight';
import {Billet} from '../models/Billet';
import {RealFlight} from '../models/RealFlight'
import { Airport } from '../models/Airport';
export class MainController {
    private userController = new UserController();
    private bookController = new BookController();
    private airportController = new AirportController();
    private flightBdd = new FlightBdd();
    private billetBdd = new BilletBdd();

    public async bookFlight(book:Book,billets:[]){
        const flight = (await this.flightBdd.getFlight(book.flightId)) as Flight;
        const total_price = await this.calculatePrice(billets,flight.prix);
        this.bookController.bookFlight(book,total_price,billets);
    }

    public async getAllFlights(){
        const volsForFront:RealFlight[] = []
        const vols:Flight[] = await this.flightBdd.getFlights() as Flight[];
        
        for (const vol of vols){
            if(vol.id){
           const airportD:Airport =  await this.airportController.getAirportById(Number(vol.depart)) as Airport;
           const airportA:Airport =  await this.airportController.getAirportById(Number(vol.arrivee) ) as Airport ;         
           const currentsSeatsTaken = (await this.bookController.getBook(vol.id)).billets.length-1;       
           const volForFront:RealFlight = {seatavailable:vol.place-currentsSeatsTaken,capacity:vol.place,prix:vol.prix,id:vol.id,departureAirport:airportD,arrivalAirport:airportA};
           volsForFront.push(volForFront);
            }
        }
        return volsForFront;
        
       
    }

    public getBookController(){
        return this.bookController;
    }

    public async calculatePrice(billets:[],flight_price:number){
        if(billets.length >= 4){
            let adults=0;
            let children=0;
            for (const billet of billets){
                if((billet as Billet).status==="children"){
                    children++;
                }else {
                    adults++;
                }
            }
            if(adults >=2 && children >=2){
                return flight_price*(billets.length-2);
            }
            
        }
        return flight_price*(billets.length-1);
    }
    
}