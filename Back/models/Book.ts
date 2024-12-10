export class Book{
    id?:number | string;
    flightId:number;
    userId:number;
    date:Date;
    bags:number
    constructor(flightId:number, userId:number, date:Date, bags:number){
        this.flightId=flightId;
        this.userId=userId;
        this.date=date;
        this.bags=bags;
    }
}