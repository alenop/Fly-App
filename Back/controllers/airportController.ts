import { AirportBdd } from '../dataService/BDD/AirportBdd'

export class AirportController{
    private bdd = new AirportBdd;
    async getAirportById(airport: number){
        return await this.bdd.getAirportById(airport);
    }
    async getAllAirports(){
        return await this.bdd.getAllAirports();
}
}