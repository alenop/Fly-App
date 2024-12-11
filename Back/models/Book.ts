export class Book{
    id?:number | string;
    flightId:number;
    userId:number;
    date:Date;
    bags:number;
    billets:[];
    constructor(flightId:number, userId:number, date:Date, bags:number,billets:[]){
        this.billets=billets;
        this.flightId=flightId;
        this.userId=userId;
        this.date=date;
        this.bags=bags;
    }
}