import { AirportBdd } from '../dataService/BDD/AirportBdd'

export class AirportController{
    private bdd = new AirportBdd;
    async getAirportById(airport: number){
        return this.bdd.getAirportById(airport);
    }
    async getAllAirports(){
        return this.bdd.getAllAirports;
}
}