export class Book{
    id?:number | string;
    flightId:number;
    userId:number;
    date:Date;
    bags:number;
    id_billets:[];
    constructor(flightId:number, userId:number, date:Date, bags:number,billets:[]){
        this.id_billets=billets;
        this.flightId=flightId;
        this.userId=userId;
        this.date=date;
        this.bags=bags;
    }
}