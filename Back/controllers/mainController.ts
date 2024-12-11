import {UserController} from './userController';
import {BookController} from './bookController';
import { Book } from '../models/Book';
import {FlightBdd} from '../dataService/BDD/FlightBdd';
import {BilletBdd} from '../dataService/BDD/BilletBdd';
import { Flight } from '../models/Flight';
import {Billet} from '../models/Billet';
export class MainController {
    private userController = new UserController();
    private bookController = new BookController();
    private flightBdd = new FlightBdd();
    private billetBdd = new BilletBdd();

    public async bookFlight(book:Book,billets:[]){
        const flight = (await this.flightBdd.getFlight(book.flightId)) as Flight;
        const total_price = await this.calculatePrice(billets,flight.price);
        this.bookController.bookFlight(book,total_price,billets);
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