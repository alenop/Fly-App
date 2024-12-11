import { Flight } from '../models/Flight';
import { FlightBdd } from '../dataService/BDD/FlightBdd';

export class FlightController{

    private bdd = new (FlightBdd);
    async getAllFlights(){
        return this.bdd.getFlight;
    }
}